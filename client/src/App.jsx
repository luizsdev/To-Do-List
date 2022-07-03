import { useState } from 'react';
import './App.css';

function App() {
  const [task,setTask] = useState([]);
  const [value,setValue] = useState("");
  function handleChange(e){
      setValue(e.target.value);
  }
  function handleAdd(e){
      setTask([...task,value])
      console.log(task)
  }
  function handleDelete(e){
    setTask(prev=> prev.filter(item=> item !== e))
  }
  return (
    
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <h1 id='title'>TO-DO LIST</h1>
        <input onChange={handleChange} type="text" placeholder='TASK' name="" id="task" />
          <button id='add' onClick={handleAdd} type="submit">ADD</button>
          <div className="taskcontainer">
            { task.map((item)=>{
              return(
                <div className='list' key={item}> {item} <button className='fa fa-check' onClick={()=> handleDelete(item)}></button>  </div>
              )
            })}
          </div>

    </div>
  );
}

export default App;
