import moment from "moment";
import clock from "assets/images/clock.png";
import video from "assets/images/videocamera.png";
import location from "assets/images/location.png";
import "./style.scss";
const Project = ({ project }) => {
  const Tag = ({ tag }) => {
    return <div className="project-tag">{tag}</div>;
  };

  return (
    <div className="project-container">
      <div className="project-header">
        <div className="project-logo">
          <img src={project.logo} alt="logo" />
        </div>
        <div className="project-owner">
          <div>{project.name}</div>
          <div className="image-container">
            <img src={location} alt="logo" /> {project.location}
          </div>
        </div>
      </div>

      <div className="project-title">{project.title}</div>
      <div className="project-tags">
        {project.tags.map((v, k) => (
          <Tag tag={v} key={k} />
        ))}
      </div>
      <div className="project-divider" />
      <div className="project-footer">
        <div className="image-container">
          <img src={video} alt="logo" />
          {project.videos.length} videos
        </div>
        <div className="image-container">
          <img src={clock} alt="logo" />{" "}
          {moment(project.updated).format("DD MMM")}
        </div>
      </div>
    </div>
  );
};
export default Project;
