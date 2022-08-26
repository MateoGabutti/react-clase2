import "./app.css"
//import CardWidget from "./CartWidget";
import NavBar from "./components/NavBar"
import ItemListContainer from "./containers/ItemListContainer";
import Ad from "./components/NavBar/Ad";
function App() {
  const jugadores = ["messi", "pele"]
  return (
    <>
    <NavBar players = {jugadores}/>
    <ItemListContainer greeting={"Bienvenidos a Fika"}/>
    <Ad>
      <h3>Fika es un emprendimiento de ropa</h3>
    </Ad>
    </>
  );
}

export default App;
