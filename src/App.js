import "./styles.css";

function User() {
  let nom = "PAKO";

  return (
    <div>
      <h1>MY NAME IS OUSTARZ : {nom} </h1>

      <div className="cont1">
        <ul>
          <li>ACCUEIL</li>
          <li>SERVICES</li>
          <li>BOUTIQUE</li>
          <li>KOO</li>
        </ul>
      </div>

      <div id="BODY1">
        {" "}
        CONTENU DU WEB CONTENU DU WEB CONTENU DU WEB CONTENU DU WEB CONTENU DU
        WEBCONTENU DU WEB
      </div>
    </div>
  );
}

function Formular() {
  return (
    <div>
      <label>USER</label>
      <input type="text"></input>
      <input type="button"></input>
    </div>
  );
}
export default function App() {
  return (
    <div className="App">
      <User />

      <Formular />
    </div>
  );
}
