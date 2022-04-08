import { useDispatch } from "react-redux";
import { searchString } from "store/projects";
import logo from "assets/images/logo.png";
import profile from "assets/images/profile.png";
import search from "assets/images/search.png";
import hero from "assets/images/hero_image.webp";

function Header() {
  const dispatch = useDispatch();
  return (
    <header className="App-header">
      <div className="header-menu">
        <div className="header-item image start">
          <img src={logo} alt="logo" />
        </div>
        <div className="header-item selection">
          <div className="header-selection-button selected">
            EXPLORE CREATORS
          </div>
          <div className="header-selection-button">MY PROJECTS</div>
        </div>
        <div className="header-item image end">
          <img src={profile} alt="logo" />
        </div>
      </div>
      <div className="hero-container">
        <div className="hero-text">
          <div className="main-text">Creative motion projects</div>
          <div className="sub-text">Discover client work to pitch on.</div>
        </div>
        <img src={hero} alt="logo" />
        <div className="hero-search-bar">
          <img src={search} alt="logo" />
          <input
            type="text"
            placeholder="Search creative projects"
            onChange={(e) => dispatch(searchString(e.target.value))}
          />
        </div>
      </div>
    </header>
  );
}
export default Header;
