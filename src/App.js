import { useState } from "react";
import "./App.css";

import AppHeader from "./components/AppHeader";
import Footer from "./components/Footer";
import IconButton from "./components/IconButton";
import MenuComponent from "./components/MenuComponent";

function App() {
  const [mainPageBool, setMainPageBool] = useState(true);
  const [displayList] = useState(false);

  return (
    <div
      className="App"
      style={{ backgroundColor: "#F5F5F5", minHeight: "100vh" }}
    >
      <AppHeader></AppHeader>

      {mainPageBool ? (
        <>
          <div
            style={{
              textAlign: "center",
              margin: "0 6vw",
            }}
          >
            <h2>Golf Bluegreen de Marolles-en-Brie</h2>

            <p>Press the heart next to a product to add it to your list!</p>

            <h5>Check out the menu with the button!</h5>

            {/*  */}
            <div className="Flex-Space">
              <IconButton
                name="wifi"
                text="Free Wifi Access"
                handleClick={() => {
                  alert("Wifi/Password \nThis will change to something nicer.");
                }}
              />
            </div>

            <div className="Flex-Space">
              <IconButton
                name="instagram"
                text="Follow in Instagram"
                handleClick={() => {
                  window.open("https://www.instagram.com/blezamac/", "_blank");
                }}
              />
              <IconButton
                name="facebook"
                text="Follow in Facebook"
                handleClick={() => {
                  window.open("https://fb.com", "_blank");
                }}
              />
            </div>

            {/*  */}
            {/*  */}
            <div
              className="Flex-Space"
              style={{ width: "50%", marginLeft: "25%", marginTop: "12px" }}
            >
              <div className="button">
                <a href="">-</a>
              </div>
              <div className="button">
                <a href="">+</a>
              </div>
            </div>
            {/*  */}
            {/*  */}

            <h5
              style={{
                fontSize: 15,
                color: "#212121",
              }}
            >
              xocopo
              <small style={{ fontSize: 10 }}> inc.</small>
            </h5>
          </div>
        </>
      ) : (
        // Menu component
        <MenuComponent />
      )}

      {/* Block of nothing to look ok */}
      <div style={{ height: "40px" }}></div>

      {/* Footer console */}
      <Footer
        onButtonClick={() => {
          setMainPageBool(!mainPageBool);
        }}
        home={mainPageBool}
        displayList={displayList}
      />
    </div>
  );
}

export default App;
