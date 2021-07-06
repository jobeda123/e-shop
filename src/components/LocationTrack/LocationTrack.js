import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import "./LocationTrack.css";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function LocationTrack(props) {
  const classes = useStyles();
  let history = useHistory();

  return (
    <div className={(classes.root, "container")}>
      <Breadcrumbs
        className="bg-light breadcrumbArea"
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <a
          className="locationStyle"
          href="/home"
          onClick={(e) => {
            e.preventDefault();
            history.push("/home");
          }}
        >
          Home
        </a>
        <a className="locationStyleActive" href="#">
          {props.data}
        </a>
      </Breadcrumbs>
    </div>
  );
}
