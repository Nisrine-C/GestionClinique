import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccessibleOutlinedIcon from '@mui/icons-material/AccessibleOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { Link } from "react-router-dom";

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "patient":
      data = {
        title: "PATIENTS",
        linkText: "Voir tous les patients ...",
        link: "patients",
        icon: (
          <AccessibleOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "medecin":
      data = {
        title: "MÉDECINS",
        linkText: "Voir tous les médecins ...",
        link: "medecins",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "ordonnance":
      data = {
        title: "ORDONNANCES",
        linkText: "Voir les détails des ordonnances ...",
        link: "ordonnances",
        icon: (
          <DescriptionOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "rendez-vous":
      data = {
        title: "RENDEZ-VOUS",
        linkText: "Voir tous les rendez-vous ...",
        link: "rendez-vous",
        icon: (
          <EventOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {amount}
        </span>
        <Link to={`/${data.link}`} style={{ textDecoration: "none" }}>
          <span className="link">{data.linkText}</span>
        </Link>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
