import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PersonIcon from '@mui/icons-material/Person';
import AccessibleIcon from '@mui/icons-material/Accessible';
import InsertChartIcon from "@mui/icons-material/InsertChart";
import EventIcon from '@mui/icons-material/Event';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import DescriptionIcon from '@mui/icons-material/Description';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Gestion Clinique</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Accueil</span>
            </li>
          </Link>
          <Link to="/patients" style={{ textDecoration: "none" }}>
            <li>
              <AccessibleIcon className="icon" />
              <span>Patients</span>
            </li>
          </Link >
          <Link to="/medecins" style={{ textDecoration: "none" }}>
          <li>
            <PersonIcon className="icon" />
            <span>Médecins</span>
            </li>
          </Link>
          <li>
            <LocalHospitalIcon className="icon" />
            <span>Consultations</span>
          </li>
          <li>
            <EventIcon className="icon" />
            <span>Rendez-Vous</span>
          </li>
          <p className="title">Autres</p>
          <li>
            <DescriptionIcon className="icon" />
            <span>Ordonnaces</span>
          </li>
          <Link to="/pathologies" style={{ textDecoration: "none" }}>
          <li>
            <CoronavirusIcon className="icon" />
            <span>Pathologies</span>
          </li>
          </Link>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
