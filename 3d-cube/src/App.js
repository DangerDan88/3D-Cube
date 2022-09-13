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
          <div className="cube__face cube__face--bottom"></div>
        </div>
      </div>
    </div>
  );
}
// need to figure out how to get a few sides to show a little more
export default App;
