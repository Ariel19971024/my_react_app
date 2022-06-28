import logo from "./logo.svg";
import Progress from "./components/Progress"
import React ,{useState,useEffect} from 'react';
import "./Sample.css";

function App() {
  useEffect(() => {
   console.log("hook")
  })
  const [flag, changeFlag] = useState(false);
  const [formData, changeFormData] = useState({policy:"",chNm:"",enNm:"",});//form表單雙向綁定
  const testHandler = (e) => {
    changeFlag(!flag)
  };
  const changeHandler=(e)=>{
    const field=e.target.getAttribute('field')
    changeFormData({...formData,...{[field]:e.target.value}})
   
  }
  const submitHandler= (e) => {
    console.log(formData)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         {formData.policy}
        </p>
        <a
          className="App-link" //等同於class
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Progress title="Ariel" isShow={flag}/>
        <button onClick={testHandler}>test</button>
        <input type="text" field="policy" onChange={changeHandler}/>
        <input type="text" field="chNm" onChange={changeHandler}/>
        <input type="text" field="enNm" onChange={changeHandler} rule="required"/>
        <button onClick={submitHandler}>提交</button>

      </header>
    </div>
  );
}
export default App;
