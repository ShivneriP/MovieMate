import React from 'react'

export const Child = ({value,setValue}) => {
  return (
    <div> I am Child
      <p> <button onClick={()=>setValue(" Parent from Child")}>Click Me</button></p>

    </div>
  )
}
