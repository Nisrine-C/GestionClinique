import "./new.scss";
import {useNavigate} from 'react-router-dom';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const New = ({ inputs, title, patients }) => {
  const [file, setFile] = useState("");
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData(values => ({...values, [name]: value}))
    console.log(formData, e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPatient = {
      id: patients.length + 1,
      fullName: formData.fullName,
      img: URL.createObjectURL(file),
      email: formData.email,
      birthDate: formData.birthDate,
      phone: formData.phone,
      status: "pending", // You can set a default status or modify as needed
      address: formData.address
    };

    // Update patients array
    patients.push(newPatient);
    // You might want to use the state to trigger a re-render, or better yet, use React state to manage your data.
    // For simplicity, I'm directly modifying the array here.
    console.log("New patient added:", newPatient);
    navigate("/patients");
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
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} name={input.name} value={input.formData} onChange={handleChange}/>
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
