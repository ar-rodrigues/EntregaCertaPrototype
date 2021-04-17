import React from "react";
import { infos } from "./data";

function About() {
  return (
    <section id="about" className="about">
      {infos.map((infoItem) => {
        const { id, title, subtitle, about, photo } = infoItem;

        return (
          <article key={id} className="info-about">
            <div className="info-text">
              <h3>{title}</h3>
              <h4>{subtitle}</h4>
              <p>{about}</p>
              <img src={photo} alt="imagem descritiva" />
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default About;
