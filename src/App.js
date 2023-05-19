import "./App.css";
import "./Components/Footer";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Content from "./Components/Content";

function App() {
  return (
    <div>
      <div
        style={{
          margin: "10px 10px",
          padding: "10px 10px",
          display: "flex",
          fontSize: "40px",
          justifyContent: "center",
          backgroundColor: "cyan",
          border: "3px solid red",
        }}
      >
        <Header></Header>
      </div>
      <div
        style={{
          margin: "10px 10px",
          padding: "10px 10px",
          fontSize: "40px",
          display: "flex",
          justifyContent: "center",
          marginTop: "140px",
        }}
      >
        <Content></Content>
      </div>

      <div
        style={{
          margin: "10px 10px",
          padding: "10px 10px",
          fontSize: "40px",
          display: "flex",
          justifyContent: "center",
          marginTop: "286px",

          backgroundColor: "cyan",
          border: "3px solid red",
        }}
      >
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
