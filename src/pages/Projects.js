import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import dataProjects from "../data/projects.json";
import ScrollText from "../components/ScrollText";

const Projects = () => {
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();
  const data = dataProjects.find((item) => item.id === id);

  useEffect(() => {
    if (!data) {
      console.log("Aucun élément correspondant à l'ID trouvé.");
      navigate("*");
    }
  }, [data, navigate]);

  return (
    <>
      <div className="projects">
        <div className="container-projects-description">
          <div className="title">{data.title}</div>
          <div className="description">{data.description}</div>

          <div className="infos">
            <div className="year">
              <p>YEAR</p> <br />
              {data.year}
            </div>
            <div className="use">
              <p>USE</p> <br />
              {data.use}
            </div>
          </div>
          <ul className="project-tools">
            {Object.entries(data.tools).map(([tool, icon], index) => (
              <li key={index}>
                <img src={icon} alt={tool} />
                {tool}
              </li>
            ))}
          </ul>
        </div>
        <div className="container-projects-img">
          <img src={data.cover} alt={data.title} />
        </div>
      </div>
      <ScrollText text="PREVIEW - PREVIEW - PREVIEW - PREVIEW - PREVIEW - PREVIEW - PREVIEW - PREVIEW - PREVIEW - PREVIEW - PREVIEW - PREVIEW - PREVIEW - PREVIEW -" />
      <div className="preview">
        <div className="visit">
          <p className="view-visit">Visit site</p>
        </div>
        <div className="view">
          <p className="view-visit">View code</p>
        </div>
      </div>
    </>
  );
};

export default Projects;
