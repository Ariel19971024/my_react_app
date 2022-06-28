import logo from "../assets/logo-w.svg";
function Menu(){
    return(
        <div className="leftBlock-inner mCustomScrollbar">
        <div className="frame-logo">
          <a href="#">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="frame-menu">
          <div className="menu-filter">
            <input type="text" id="menu_filter" placeholder="搜尋目錄" />
          </div>
          <div className="menu-pgName">
            <span>元件系統</span>
          </div>
          <div className="non-menu-list">
            <span>暫無項目</span>
          </div>
          <div className="menu-list">
            <ul>
              <li>
                <a href="#" className="menu-list-active">
                  <span>BreadCrumb</span>
                  <span>麵包屑</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Button</span>
                  <span>按鈕</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
}
export default Menu