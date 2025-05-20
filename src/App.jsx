import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import CustomInput from './components/CustomInput'
import CustomButton from './components/CustomButton'
import Card from './components/Card'

function App() {
  const [add, setAdd] = useState(false)

  const [Tasks, setTasks] = useState([])
  const [singleTask, setSingleTask] = useState('')
  const [singleDes, setSingleDes] = useState('')

  const updateTask =(id)=>
    {
      setTasks(
        Tasks.map((taskValue)=>(
          taskValue.id==id?{...taskValue,complete:true}:taskValue
        ))
      )
    }

  const deleteTask =(id)=>
  {
    setTasks(
      Tasks.filter((taskValue)=>(
        taskValue.id==id?false:true
      ))
    )
  }

  const addToCard = () => {
    const id = Tasks.length == 0 ? 1 : Tasks.length + 1;
    const taskDetails =
    {
      id: id,
      task: singleTask,
      des: singleDes,
      complete: false
    }
    setTasks(
      [...Tasks, taskDetails]
    )
  }

  const clearInput =()=>
  {
    setSingleTask('')
    setSingleDes('')
  }

  const handleCustomTask = (event) => {
    setSingleTask(event.target.value)
  }
  const handleCustomDes = (event) => {
    setSingleDes(event.target.value)
  }

  const handleInput = () => {
    setAdd(!add)
  }

  return (
    <>
      <div className='main'>

        <div className="inputSection">
          <Header handleInput={handleInput} />
          {
            add == true ?
              <>
                <CustomInput value={singleTask} name='Task' placeHolder='Enter Task' change={handleCustomTask} />
                <CustomInput value={singleDes} name='Description' placeHolder='Enter Description' change={handleCustomDes} />
                <div className="btnWrapper">
                  <CustomButton name='Save Task' color='white' bg='#1877F2' click={addToCard} />
                  <CustomButton name='Cancel' color='white' bg='red'click={clearInput} />
                </div>
              </> : null
          }

        </div>

        <div className="cardSection">
       {
        Tasks.map((taskValue)=>(
          <Card title={taskValue.task} des={taskValue.des} key={taskValue.id} delete={()=>deleteTask(taskValue.id)}
           update={()=>updateTask(taskValue.id)} complete={taskValue.complete} />
        ))
       }
        </div>

      </div>
    </>
  )
}

export default App
