import Menu from "./components/Menu";
import Header from "./components/Header";
import Breadcrumbs from "./components/unitComponent/Breadcrumbs";
import Buttons from "./components/unitComponent/Buttons";
import Demo from "./pages/Demo";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
function App() {
  const [isShow, changeData] = useState(false);
  const menuToggle = (e) => {
    e.preventDefault();
    changeData(!isShow);
  };
  return (
    <div className="frame">
      <nav
        className={`frame-block leftBlock ${!isShow ? "menu-close" : ""}`}
        id="left_menu"
      >
        {isShow ? <Menu /> : null}
      </nav>
      <div className="frame-block rightBlock" id="right_content">
        <Header menuToggle={menuToggle} />
        <main className="frame-content mainModule">
          <Routes>
            <Route path="/my_react_app/" element={null} />
            <Route
              path="/my_react_app/breadcrumbs"
              element={
                <Breadcrumbs list={["財務", "應收票據", "應收票據建檔維護"]} />
              }
            />
            <Route path="/my_react_app/buttons" element={<Buttons />} />
            <Route path="/my_react_app/demo" element={<Demo />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
export default App;
