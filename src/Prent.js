import React, { useState } from 'react'
import { Child } from './Child'

export const Prent = () => {
    const[value,setValue]=useState('Paret')
  // const handnlechild=()=>{
  //    value='parent';
  //    console.log(value);
  //    setValue();
  // }
  
    return (
    <div>
        <p> i am {value}</p> 
         <Child value={value} setValue={setValue}/>
    </div>
  )
}
