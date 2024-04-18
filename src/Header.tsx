import DL from "./assets/dl.png"

function Header() {
  return (
    <div className="header">
        <h1>Les négociales</h1>
        <h2>11 Avril 2024</h2>
        <h3>Pour télécharger une photo cliquez sur l'icône <img src={DL} height="30" width="30"/> </h3>
    </div>
  )
}

export default Header