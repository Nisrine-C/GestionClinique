import "./new.scss";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import axios from 'axios';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const New = ({ inputs, apiUrl, title,parent}) => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
    ...prevData,
    [name]: value,
    }));
    console.log(formData)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = {};
      for (const key in formData) {
        if (Object.hasOwnProperty.call(formData, key)) {
          formDataToSend[key] = formData[key];
        }
      }
    console.log(formDataToSend)
    try {
      const response = await axios.post(`${apiUrl}/`, formDataToSend);
      console.log(response);
      console.log(parent);
      navigate(parent);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleSubmit}>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  {input.type === "select" ? (
                    <select name={input.name} onChange={handleChange} >
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
                      value={formData[input.name]}
                      onChange={handleChange}
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
  );
};

export default New;
