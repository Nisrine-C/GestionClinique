import "./datatable.scss";
import axios from 'axios';
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Datatable = ({ title, columns, apiUrl, newLink ,buttonTitle}) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${apiUrl}/${id}`);
      fetchData();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/${title}/${params.row.id}`}
              state={{ item: params.row }}
              style={{ textDecoration: "none" }}>
              <div className="viewButton">Consulter</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Supprimer
            </div>
          </div>
        );
      },
    },
  ];
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    fetchData();
  }, [title]);
  
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Liste des {title} :
        <Link to={newLink} className="link">
          {buttonTitle}
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default Datatable;
