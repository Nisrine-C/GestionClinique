import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { patientColumns, patientRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Datatable = () => {
  const [data, setData] = useState(patientRows);

  const handleDelete = (id) => {
    if (window.confirm("Êtes-vous sûr de retirer le patient?")) {
      setData(data.filter((item) => item.id !== id));
    }
  };

  useEffect(() => {
    data.map(e => {
      // console.log("test", e.id);
    });
  });

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/patients/${params.row.id}`} state={{ patient : params.row }} style={{ textDecoration: "none" }}>
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
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Liste des patients :
        <Link to="/patients/new" className="link">
          Ajouter un patient
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={patientColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default Datatable;
