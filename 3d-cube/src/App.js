import "./App.css";

function App() {
  return (
    <div className="App">
      {" "}
      <div className="container">
        <div className="cube">
          <div className="cube__face cube__face--front"></div>
          <div className="cube__face cube__face--back"></div>
          <div className="cube__face cube__face--right"> </div>
          <div className="cube__face cube__face--left"></div>
          <div className="cube__face cube__face--top"></div>
          <div className="cube__face cube__face--bottom"></div>
        </div>
      </div>
    </div>
  );
}
// need to figure out how to get a few sides to show a little more
// see if I can make top of cube visible on start or some sides
export default App;
