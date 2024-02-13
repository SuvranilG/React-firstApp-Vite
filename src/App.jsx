import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Employees from './components/Employees.jsx';

function App() {
  const [count, setCount] = useState(0);

  // const [employees,setEmployees]=useState([{id:"1", title:"Associate", name:"Ramesh"},
  // {id:"2", title:"Manager", name:"Suresh"},
  // {id:"3", title:"Director", name:"Suv"}]);

  const employees=[{id:"1", title:"Associate", name:"Ramesh"},
  {id:"2", title:"Manager", name:"Suresh"},
  {id:"3", title:"Director", name:"Suv"}];



  

  

  return (
    <>
    {employees.map(Employee=>{
    return <Employees key={Employee.id} id={Employee.id} name={Employee.name} title={Employee.title}/>
  })}
      <div>
      <div style={{display:"flex", flexDirection:"column"}} id="nav">
      <Navbar />
      
      </div>
      
      <p>Namaste Duniya</p>
      </div>
      <h1>Vite + React </h1>



      <div className="card">

      <button style={{color:"red"}} onClick={() => setCount((count) => count - 1)}>
          <h4>Decrement -</h4>
        </button>
        
      <h1 style={{color:"Aqua"}}>Count is {count}</h1>

      <button style={{color:"Green"}} onClick={() => setCount((count) => count + 1)}>
          <h4>Increment +</h4>
        </button>
        
      </div>

    

  
    <Footer/>
      
    </>
  )
}

export default App
