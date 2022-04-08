import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Project from "components/Project"
import "./style.scss";

export default function ContentContainer() {
  const [filteredProjects, setFilteredProjects] = useState([]);
  const { projects, searchString } = useSelector((state) => state.projects);

  useEffect(() => {
    if (searchString !== "") {
      setFilteredProjects(
        projects.filter((project) =>
          project.name.toLowerCase().includes(searchString.toLowerCase())
        )
      );
    } else {
      setFilteredProjects(projects);
    }
  }, [projects, searchString]);

  return (
    <div className="content-container">
      <div className="content-container-header">
        All jobs - {filteredProjects.length} results
      </div>
      <div className="separator" />
      <div className="projects-container">
        {filteredProjects.map((v, k) => (
          <Project project={v} key={k} />
        ))}
      </div>
    </div>
  );
}
