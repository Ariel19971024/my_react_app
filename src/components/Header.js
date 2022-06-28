function Header(props) {
const{menuToggle}=props
let isShow=false
  return (
    <header className="frame-content headerModule">
      <div className="headerModule-inner">
        <div className="header-item header-title">
          <div className="menu-btn">
            <a href="" onClick={(e)=>menuToggle(e,isShow)} className="menu-active">
              <span className="menu-bar"></span>
            </a>
          </div>
          <div className="header-unit">
            <div className="header-unit-inner">
              <div className="header-unit-item header-unit-finance">
                <a href="#" title="財務">
                  財務
                </a>
                <ul>
                  <li>
                    <a href="#" level-next="true">
                      資金運用
                    </a>
                    <ul>
                      <li>
                        <a href="#">短期票券</a>
                      </li>
                      <li>
                        <a href="#">定存管理</a>
                      </li>
                      <li>
                        <a href="#">銀行存款</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" level-next="true">
                      應收帳款
                    </a>
                    <ul>
                      <li>
                        <a href="#">應收票據</a>
                      </li>
                      <li>
                        <a href="#">信用卡</a>
                      </li>
                      <li>
                        <a href="#">繳費簽收</a>
                      </li>
                      <li>
                        <a href="#">約定扣款</a>
                      </li>
                      <li>
                        <a href="#">條碼</a>
                      </li>
                      <li>
                        <a href="#">銷帳</a>
                      </li>
                      <li>
                        <a href="#">暫收</a>
                      </li>
                      <li>
                        <a href="#">催收</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" level-next="true">
                      應付帳款
                    </a>
                    <ul>
                      <li>
                        <a href="#">退保支付</a>
                      </li>
                      <li>
                        <a href="#">理賠支付</a>
                      </li>
                      <li>
                        <a href="#">費用支付</a>
                      </li>
                      <li>
                        <a href="#">佣金支付</a>
                      </li>
                      <li>
                        <a href="#">應付未付</a>
                      </li>
                      <li>
                        <a href="#">付款作業</a>
                      </li>
                      <li>
                        <a href="#">國內外交易</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="header-unit-item header-unit-invest">
                <a href="#" title="投資">
                  投資
                </a>
              </div>
              <div className="header-unit-item header-unit-accounting">
                <a href="#" title="會計">
                  會計
                </a>
              </div>
              <div className="header-unit-item header-unit-report">
                <a href="#" title="報表">
                  報表
                </a>
              </div>
              <div className="header-unit-item header-unit-public">
                <a href="#" title="公用">
                  公用
                </a>
              </div>
              <div className="header-unit-item header-unit-manage">
                <a href="#" title="管理">
                  管理
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="header-item header-info">
          <ul>
            <li className="header-info-home">
              <a href="#">
                <span className="material-icons">home</span>
              </a>
            </li>
            <li className="header-info-identity">
              <select>
                <option>財務管理：陳怡芳(ABC12345)</option>
                <option>銀資管理：陳怡芳(ABC12345)</option>
              </select>
            </li>
            <li className="header-info-logout">
              <a href="">登出</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
export default Header;
