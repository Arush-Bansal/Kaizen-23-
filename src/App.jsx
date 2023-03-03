import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/Footer/footer";
import Carousel from "./components/Carousel/Carousel";

function App() {
  return (
    <>
      hello
      <Navbar />
      <div style={{width:'100%', minHeight: "100vh", color: "white" }}>HOMEPAGE SECTION</div>
      <div
        style={{
          width: "100%",
          margin:'2rem 0',
        }}
        className="Carousel-container"
      >
        <Carousel />
      </div>
      <Footer />
    </>
  );
}

export default App;