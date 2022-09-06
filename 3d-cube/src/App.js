import "./App.css";
import killua from "./killua.jpeg";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="cube pers250">
          <div className="face front">
            <img src={killua} alt="killua" height={100} width={100}></img>
          </div>
          <div className="face back">2</div>
          <div className="face right">3 </div>
          <div className="face left">4</div>
          <div className="face top">5</div>
          <div className="face bottom">6</div>
        </div>
      </div>
    </div>
  );
}
//The perspective is what gives us the 3D impression. The farther from the viewer the elements are, the smaller they are.
// need to figure out how to rotate it
export default App;
