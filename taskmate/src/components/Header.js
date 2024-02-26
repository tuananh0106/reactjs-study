import Logo from "../assets/logo.png";

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Taskmate Logo" />
        <span>Taskmate</span>
      </div>
      <div className="themeSelector">
        <span className="light activeTheme"></span>
        <span className="medium activeTheme"></span>
        <span className="dark activeTheme"></span>
        <span className="gOne activeTheme"></span>
        <span className="gTwo activeTheme"></span>
        <span className="gThree activeTheme"></span>
      </div>
    </header>
  );
};
