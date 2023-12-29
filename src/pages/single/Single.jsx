import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import axios from 'axios';
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const Single = ({ inputs, apiUrl, title, parent }) => {
  const [formData, setFormData] = useState({});
  const { elementId } = useParams();
  const navigate = useNavigate();
  const [element, setElement] = useState({});
  const [disable, setDisable] = useState(true);
  const [loading, setLoading] = useState(true);
  
  const getElement = async () => {
    console.log(elementId);
    try {
      const response = await axios.get(`${apiUrl}/${elementId}`);
      console.log(response)
      setElement(response.data.element);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }

  const handleInputChange = (e) => {
  const { name, value } = e.target;
  setElement((prevData) => ({
    ...prevData,
    [name]: value,
  }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("in submit")

    const formDataToSend = {};
      for (const key in element) {
        if (Object.hasOwnProperty.call(element, key)) {
          formDataToSend[key] = element[key];
        }
      }
    console.log(formDataToSend);
    navigate({parent});
    try {
      const response = await axios.put(`${apiUrl}/${elementId}`, formDataToSend);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  function toggleDisabled() {
    setDisable(false);
  }

  useEffect(() => {
    getElement();
  }, []);



  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div>
          <h1 className="title">Les informations personnelles du patient</h1>
        </div>
        <div className="top">
          <div className="card">
            <div className="editButton" onClick={toggleDisabled}>Éditer</div>
            <div className="item">
              <div className="bottom">
              <div className="right">
                <form onSubmit={handleSubmit}>
                  {inputs.map((input) => (
                    <div className="formInput" key={input.id}>
                      <label>{input.label}</label>
                      {input.type === "select" ? (
                        <select
                          name={input.name}
                          onChange={handleInputChange}
                          value={element[input.name] || ""}
                          disabled={disable}>
                          {input.options.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={input.type}
                          placeholder={input.placeholder}
                          name={input.name}
                          value={element[input.name] || ""}
                          onChange={handleInputChange}
                          disabled={disable}
                        />
                      )}
                    </div>
                  ))}
                  <button type="submit">Valider</button>
                </form>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
