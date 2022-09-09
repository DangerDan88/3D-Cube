import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="cube">
          <div className="cube__face cube__face--front"></div>
          <div className="cube__face cube__face--back"></div>
          <div className="cube__face cube__face--right">3 </div>
          <div className="cube__face cube__face--left">4</div>
          <div className="cube__face cube__face--top">5</div>
          <div className="cube__face cube__face--bottom">6</div>
        </div>
      </div>
    </div>
  );
}
//The perspective is what gives us the 3D impression. The farther from the viewer the elements are, the smaller they are.
// need to figure out how to rotate it
// might need a js function to get this cube to rotate correctly
export default App;
