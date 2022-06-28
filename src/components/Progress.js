function Progress(props) {
  if(props.isShow){
      return (
    <div>
        <p>{props.title}</p>
    </div>
  );
  }
}
export default Progress;
