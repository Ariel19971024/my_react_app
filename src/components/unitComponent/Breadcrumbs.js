function Breadcrumbs(props) {
  return (
    <div className="content-component content-breadcrumb">
      <ul>
        {props.list.map((title)=>{
          return <li><a href=''>{title}</a></li>
        })}
      </ul>
    </div>
  );
}
export default Breadcrumbs;
