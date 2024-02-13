import React from 'react'

const Employees = (Employee) => {




  return (
    <>


    <div className="m-4 border border-1 text-3xl font-bold underline border-purple-500">
    <span>{Employee.id}</span>
    <span> {Employee.name}</span>
    <span> {Employee.title}</span>
    </div>

   

    </>
    
  )
}

export default Employees