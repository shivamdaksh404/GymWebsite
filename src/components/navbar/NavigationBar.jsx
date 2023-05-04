import React, { useState } from "react";
import { linkData } from "../../utils/data";
import { Link } from "react-router-dom";
import style from "./NavigationBar.module.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";

export default function NavigationBar() {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.wrapperContainer}>
        <a href="/">
          <img src="/logo.png" height={100} width={150} alt="" />
        </a>
        <div className={style.linksWrapper}>
          {linkData.map((ele, index) => (
            <li key={index}>
              <Link to={ele.path}>{ele.linkName}</Link>
            </li>
          ))}
          <Button onClick={() => navigate("/register")} variant="contained">
            Join Us
          </Button>
        </div>
        <div className={style.toggleButton}>
          {<IconButton onClick={handleToggle}>
           { !toggle ?<MenuIcon
              color="Primary"
              sx={{
            
                color: "blue",
                height: "50px",
                width: "50px",
                
              }}
            />: <CancelIcon sx={{
            
            color: "blue",
            height: "50px",
            width: "50px",
            
          }}/>}
          </IconButton>}
        </div>

        {toggle && (
          <div className={style.toggleDiv}>
            {linkData.map((ele, index) => (
              <li key={index}>
                <Link to={ele.path}>{ele.linkName}</Link>
              </li>
            ))}
            <Button onClick={() => navigate("/register")} variant="contained">
              Join Us
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
