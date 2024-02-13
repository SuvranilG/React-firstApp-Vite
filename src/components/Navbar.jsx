import React from 'react'
import { useState } from 'react'


const Navbar = () => {
  const [showText,setShowText]= useState(false);
  const [title,setTitle]= useState('');

  


  return (
  <>
  { <h1>{title}</h1>}
  <button onClick={()=>{
    setShowText(!showText);
  {showText? setTitle('') :setTitle('Navigation Bar')}

    }}>Toggle</button>
  
  <p>Hello World</p>
  

  </>
    

  )
}

export default Navbar