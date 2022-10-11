import Logo from "../assets/logo.png";
import "./headers.css";
const Header = () => {
  return (
    <div className="headers-container">
      <img src={Logo} alt="Logo" height={75} />
      <button>Login</button>
    </div>
  );
};

export default Header;
