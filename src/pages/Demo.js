import Breadcrumbs from "../components/unitComponent/Breadcrumbs";
function Demo() {
  return (
    <div className="content">
      <Breadcrumbs list={["財務", "應收票據", "應收票據建檔維護"]} />
      <div className="content-component content-card">
        <div className="content-component content-unitname">
          <div className="unitname-inner">
            <div className="unitname-item unitname-title">應收票據建檔維護</div>
            <div className="unitname-item unitname-favourite">
              <a
                href="#"
                data-toggle="tooltip"
                title="加入我的最愛"
                data-placement="left"
              >
                <span className="material-icons">star_outline</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Demo;
