import "./App.css";
import Header from "./common/header/Header";
import CustomBarChat from "./components/barChart/BarChat";
import SimpleBubbleChart from "./components/bubbleChart/BubbleChart";
import CustomCirCularBar from "./components/circularProgessBar/CustomCirCularBar";
import SimplePieChart from "./components/pieChart/PieChart";
import SimpleWordCloud from "./components/wordChart/WordChart";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <SimplePieChart />
        <SimpleBubbleChart />
        <SimpleWordCloud />
        <CustomCirCularBar />
        <CustomBarChat />
      </div>
    </div>
  );
}

export default App;
