import React from "react";
import style from './AboutUs.module.css';
import { Button } from "@mui/material";

export default function AboutUs() {
  const showAlert = () => {
    alert("clicked from about us section");
  };

  return (
    <div className={style.mainContainer}>
      <section  className={style.aboutUsSection}>

      <div  className={style.videoDiv}>

      <iframe   src="https://www.youtube.com/embed/Rd3XHPk5me4"
          title="YouTube video player"
         
          frameBorder="100"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}></iframe>
      </div>
      <div className={style.aboutContentDiv}>
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aspernatur
          magni labore expedita molestiae dolores suscipit deleniti nam magnam
          ad assumenda, laudantium repellendus recusandae consequuntur libero.
          Nemo repudiandae consequatur hic.
        </p>
        <Button onClick={showAlert} variant="contained">Learn More</Button>
      </div>
      </section>
      <section className={style.whyChooseUsSection} >
      <div className={style.WhyChooseContentDiv}>

        <h1>Why Choose Us</h1>
        <ul>
          <li className={style.listdiv}>
            <h3>Consultations With Expert</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae,
              recusandae nihil eius iusto quibusdam debitis rem ea! Veritatis
              placeat, possimus assumenda similique ipsum nulla aliquam magni
              cumque praesentium earum quisquam, fugiat quasi. Facilis cumque
              mollitia dolores nobis nesciunt quae libero?
            </p>
          </li>
          <li className={style.listdiv}>
            <h3>Best Workout Facilities</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae,
              recusandae nihil eius iusto quibusdam debitis rem ea! Veritatis
              placeat, possimus assumenda similique ipsum nulla aliquam magni
              cumque praesentium earum quisquam, fugiat quasi. Facilis cumque
              mollitia dolores nobis nesciunt quae libero?
            </p>
          </li>
        </ul>
      </div>
      <div className={style.videoDiv}> 
        <iframe   src="https://www.youtube.com/embed/Rd3XHPk5me4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}></iframe>
      </div>
      </section>
    </div>
  );
}
