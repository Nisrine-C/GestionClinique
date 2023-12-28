import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const Single = ({ inputs }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [file, setFile] = useState("");
  const [disable, setDisable] = useState(true);
  const [formData, setFormData] = useState(location.state.patient);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // If a new file is selected, convert it to a data URL
    const fileDataURL = file ? URL.createObjectURL(file) : null;

    const updatedPatient = {
      ...formData,
      img: fileDataURL || location.state.patient.img, // Use the new image data if available, otherwise keep the existing image
    };

    // You can now use the updatedPatient data as needed
    console.log("Updated patient data:", updatedPatient);
    // Handle saving the updated data, e.g., dispatch an action, make an API call, etc.
    alert("Données mises à jour avec succès!");
    // navigate("/patients");
  };

  function toggleDisabled() {
    setDisable(false);
  }


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
              <img
               src={
                file
                  ? URL.createObjectURL(file)
                  : location.state.patient.img
              }
                alt=""
                className="itemImg"
              />
              <div className="bottom">
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
                      disabled = {disable}
                    />
                  </div>

                  {inputs.map((input) => (
                    <div className="formInput" key={input.id}>
                      <label>{input.label}</label>
                      <input type={input.type} placeholder={input.placeholder} name={input.name} value={formData[input.name] || ""} onChange={handleInputChange} disabled = {disable}/>
                    </div>
                  ))}
                  <button type="submit">Valider</button>
                </form>
              </div>
            </div>


              
              {/* <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 2345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
