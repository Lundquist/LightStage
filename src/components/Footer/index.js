import instagram from "assets/images/instagram.png";
import twitter from "assets/images/twitter.png";

export default function Footer() {
  return (
    <div className="app-footer">
      <div className="conditions">
        <div className="footer-item">Terms & Conditions</div>
        <div className="footer-item">Contact</div>
      </div>
      <div className="social">
        <div className="footer-item copyright">
          © 2020 | SKILLDAR | All Rights Reserved
        </div>
        <img className="footer-item image" src={instagram} alt="instagram" />
        <img className="footer-item image" src={twitter} alt="twitter" />
      </div>
    </div>
  );
}
