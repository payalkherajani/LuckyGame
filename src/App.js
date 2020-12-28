import React,{useState} from 'react';
import './App.css';

function App() {
  const [birth,setBirth] = useState();
  const [lucky,setLucky] = useState(0);

  function inputHandler(event){
    const userBirth = event.target.value;
    setBirth(new Date(userBirth));

  }
  function getLuckyNum(event){
    const luckyNumber = event.target.value;
    setLucky(luckyNumber);

  }

  function evaluateFunc(){
  const dateUser = birth;
  const year = dateUser.getFullYear();
  const month = dateUser.getMonth() + 1 ;
  const date = dateUser.getDate();
  const dividend = year + month + date;
  
  const result = dividend%lucky;
  if(result==0){
    alert("Yeah!Lucky")
  }
  else{
    alert("Oops!Change your lucky number");
  }
  

  }

  return (
    <div className="App">
      <input type="date" onChange={inputHandler} />
      <input type="number" placeholder="Input your lucky number" onChange={getLuckyNum} />
      <button onClick={evaluateFunc}>Evaluate</button>
      <div>Output</div> 
    </div>
  );
}

export default App;
