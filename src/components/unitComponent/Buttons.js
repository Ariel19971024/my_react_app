function Buttons(){
    return( 
        <div className="content">
    <div className="card-detail">
    <div className="detail-board detail-board-btn">
        <div className="content-component content-btn">
            <div className="content-btn-main">
                <ul>
                    <li><button className="content-btn-item btn-main btn-clear"><span>清除</span></button></li>
                    <li><button className="content-btn-item btn-main btn-query"><span>查詢</span></button></li>
                    <li><button className="content-btn-item btn-main btn-add"><span>新增</span></button></li>
                    <li><button className="content-btn-item btn-main btn-modify"><span>修改</span></button></li>
                    <li><button className="content-btn-item btn-main btn-delete"><span>刪除</span></button></li>
                </ul>
            </div>
            <div className="content-btn-secondary">
                <ul>
                    <li><button className="content-btn-item btn-secondary btn-signed"><span>簽收</span></button></li>
                    <li><button className="content-btn-item btn-secondary btn-reject"><span>駁回</span></button></li>
                    <li><button className="content-btn-item btn-secondary btn-print"><span>列印</span></button></li>
                    <li><button className="content-btn-item btn-secondary btn-insert"><span>轉入資料庫</span></button></li>
                    <li><button className="content-btn-item btn-secondary btn-save"><span>存檔</span></button></li>
                </ul>
            </div>
            <div className="content-btn-third">
                <ul>
                    <li><button className="content-btn-item btn-third"><span>歷程</span></button></li>
                    <li><button className="content-btn-item btn-third"><span>入帳</span></button></li>
                </ul>
            </div>
        </div>
    </div>
</div>
</div>)
}
export default Buttons;