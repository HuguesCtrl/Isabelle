import DL from "./assets/dl.png";

function Header() {
  return (
    <div className="header">
      <h1>Isabelle fête ses 60 ans !</h1>
      <h2>20 Avril 2024</h2>
      <h3>
        Pour télécharger une photo cliquez sur l'icône{" "}
        <img src={DL} height="20" width="20" />{" "}
      </h3>
    </div>
  );
}

export default Header;
