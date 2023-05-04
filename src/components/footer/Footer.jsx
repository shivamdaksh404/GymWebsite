import React from "react";
import style from "./Footer.module.css";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  const styles = { height: "2rem", width: "2rem", color: "black" };

  return (
    <div className={style.mainContainer}>
      <div className={style.allDivWrapper}>
        <div className={style.wrapperDiv}>
          <div className={style.divOne}>
            <img src="/logo.png" height={100} width={150} alt="hustlerGym" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
              voluptas vero inventore quisquam.
            </p>
            <div className={style.iconDiv}>
              <IconButton color="primary" sx={styles}>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrers"
                >
                  <FacebookIcon sx={styles} />
                </a>
              </IconButton>

              <IconButton color="primary" sx={styles}>
                <a
                  href="https://www.instagram.com"
                  rel="noreferrers"
                  target="_blank"
                >
                  <InstagramIcon sx={styles} />
                </a>
              </IconButton>

              <IconButton color="primary" sx={styles}>
                <a
                  href="https://www.twitter.com"
                  rel="noreferrers"
                  target="_blank"
                >
                  <TwitterIcon sx={styles} />
                </a>
              </IconButton>
            </div>
          </div>
          <div className={style.divTwo}>
            <ul className={style.footerList}>
              <h4> Healthy livivng</h4>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
            </ul>

            <ul className={style.footerList}>
              <h4> Services</h4>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
            </ul>

            <ul className={style.footerList}>
              <h4>Programs</h4>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
            </ul>
          </div>
        </div>
        <hr />
        <p>@2023 is All rights copy reserved</p>
      </div>
    </div>
  );
}
