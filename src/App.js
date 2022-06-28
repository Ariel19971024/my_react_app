import Menu from "./components/Menu";
import Header from "./components/Header";
import Breadcrumbs from "./components/unitComponent/Breadcrumbs";
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
          <div class="content">
            <Breadcrumbs list={["財務", "應收票據","應收票據建檔維護"]} />
          </div>
        </main>
      </div>
    </div>
  );
}
export default App;
