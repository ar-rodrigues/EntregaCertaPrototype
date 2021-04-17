import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { experiences } from "./data";
import { links } from "./data";
import Contact from "./Contact";

function Experiences() {
  const [value, setValue] = useState(0);

  const { company, title } = experiences[value];

  return (
    <section>
      <div className="title">
        <h2>{links[2].text}</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {experiences.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          {title}
        </article>
      </div>
    </section>
  );
}

export default Experiences;
