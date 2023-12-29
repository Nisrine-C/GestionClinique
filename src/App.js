import Home from "./pages/home/Home";
// import Login from "./pages/login/Login";
import { useState, useEffect } from "react";
import axios from 'axios';
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { patientInputs ,medecinInputs,pathologieInputs} from "./formSource";
import { medecinColumns,patientColumns,pathologieColumns} from "./datatablesource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {  


  useEffect(() => {
  }, []);




  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="patients">
              <Route index element={<List title='patients' columns={patientColumns} apiUrl="http://127.0.0.1:8000/api/patients" newLink="/patients/new" buttonTitle="Nouveau Patient"/>} />
              <Route
                path=":elementId"
                element={<Single title="Patients" inputs={patientInputs} parent="/patients" apiUrl="http://127.0.0.1:8000/api/patients" />} />
              <Route
                path="new"
                element={<New inputs={patientInputs} parent="/patients" apiUrl="http://127.0.0.1:8000/api/patients" />}
              />
            </Route>
            <Route path="medecins">
              <Route index element={<List title="medecins" columns={medecinColumns} apiUrl="http://127.0.0.1:8000/api/medecins" newLink="/medecins/new" buttonTitle="Nouveau Medecin"/>} />
              <Route
                path=":elementId"
                element={<Single inputs={medecinInputs} parent="/medecins" apiUrl="http://127.0.0.1:8000/api/medecins" />} />
              <Route
                path="new"
                element={<New inputs={medecinInputs} parent="/medecins" apiUrl="http://127.0.0.1:8000/api/medecins" />}
              />
            </Route>
            <Route path="pathologies">
              <Route index element={<List title="pathologies" columns={pathologieColumns} apiUrl="http://127.0.0.1:8000/api/pathologies" newLink="/pathologies/new" buttonTitle="Nouveau Pathologie"/>} />
              <Route
                path=":elementId"
                element={<Single inputs={pathologieInputs} parent="/pathologies" apiUrl="http://127.0.0.1:8000/api/pathologies" />} />
              <Route
                path="new"
                element={<New inputs={pathologieInputs} parent="/pathologies" apiUrl="http://127.0.0.1:8000/api/pathologies" />}
              />
            </Route>
            
            {/* <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
