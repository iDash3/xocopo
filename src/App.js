import { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppHeader from "./components/AppHeader";
import Footer from "./components/Footer";
import IconButton from "./components/IconButton";
import MenuComponent from "./components/MenuComponent";

import dummyRestaurant from "./components/dummyRestaurant";
import AdminTmp from "./components/AdminTmp";

function App() {
  const [mainPageBool, setMainPageBool] = useState(true);
  const [displayList] = useState(false);

  return (
    <Router>
      <div
        className="App"
        style={{ backgroundColor: "#F5F5F5", minHeight: "100vh" }}
      >
        <AppHeader />
        <Routes>
          <Route
            path="/"
            element={
              <div
                style={{
                  textAlign: "center",
                  margin: "0 6vw",
                }}
              >
                <h2>{dummyRestaurant.name}</h2>

                <p>Press the heart next to a product to add it to your list!</p>

                <h5>Check out the menu with the button!</h5>

                {/*  */}
                <div className="Flex-Space">
                  <IconButton
                    name="wifi"
                    text="Free Wifi Access"
                    handleClick={() => {
                      alert(
                        "Wifi/Password \nThis will change to something nicer."
                      );
                    }}
                  />
                </div>

                <div className="Flex-Space">
                  <IconButton
                    name="instagram"
                    text="Follow in Instagram"
                    handleClick={() => {
                      window.open(
                        "https://www.instagram.com/blezamac/",
                        "_blank"
                      );
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

                {/* Test buttons */}
                <div
                  className="Flex-Space"
                  style={{
                    width: "50%",
                    marginLeft: "25%",
                    marginTop: "12px",
                  }}
                >
                  <div className="button">
                    <span>-</span>
                  </div>
                  <div className="button">
                    <span>+</span>
                  </div>
                </div>
                {/*  */}
              </div>
            }
          ></Route>
          <Route path="/menu" element={<MenuComponent />}></Route>
          <Route path="/admin" element={<AdminTmp />}></Route>
        </Routes>

        {/* Logo */}
        <h5
          style={{
            fontSize: 15,
            color: "#212121",
            marginTop: "5vh",
            textAlign: "center",
          }}
        >
          xocopo
          <small style={{ fontSize: 10 }}> inc.</small>
        </h5>

        {/* Block of nothing to look ok */}
        <div style={{ height: "75px" }}></div>

        {/* Footer console */}
        <Footer
          onButtonClick={() => {
            setMainPageBool(!mainPageBool);
          }}
          home={mainPageBool}
          displayList={displayList}
        />
      </div>
    </Router>
  );
}

export default App;
