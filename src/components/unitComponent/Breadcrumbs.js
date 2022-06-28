function Breadcrumbs(props) {
  return (
    <div className="content">
      <div className="content-component content-breadcrumb">
        <ul>
          {props.list.map((title, index) => {
            return (
              <li key={`Id${index}`}>
                <a href="">{title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default Breadcrumbs;
