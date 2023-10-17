import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import dataProjects from "../data/projects.json";

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
        <img src={data.cover} alt={data.title} />
        <div className="title">{data.title}</div>
        <div className="description">{data.description}</div>

        <ul className="project-tools">
          {Object.entries(data.tools).map(([tool, icon], index) => (
            <li key={index}>
              <img src={icon} alt={tool} />
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Projects;
