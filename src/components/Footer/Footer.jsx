import logoWhite from "/kasa_white.svg";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer_content">
        <img src={logoWhite} alt="Logo Kasa blanc" />
        <p>&copy; 2020 -  Kasa. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
