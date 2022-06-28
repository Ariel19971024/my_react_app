import logo from "../assets/logo-w.svg";
import { NavLink } from "react-router-dom";
import { menuList } from "../helperFunction/MenuList";
function Menu() {
  return (
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
        <div className="menu-list">
          <ul>
            {menuList.map((page, index) => {
              return (
                <li key={`menu_option${index}`}>
                  <NavLink
                    to={page.href}
                    className={(navData) =>
                      navData.isActive ? "menu-list-active" : ""
                    }
                  >
                    <span>{page.egNm}</span>
                    <span>{page.chNm}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Menu;
