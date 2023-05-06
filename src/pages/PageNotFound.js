// import React from 'react'
// import PageNotFoundImage from '../assets/pagenotfound.png';
// import { Link } from 'react-router-dom';

// export const PageNotFound = () => {
//   return (
//     <main> 
//    <section className='flex flex-col justify-center px-2'>
//     <div className='flex flex-col items-center my-4'>
//      <p className=' text-7xl text-gray-700  font-bold my-10 dark:text-white'>
//       404,Oops Page Not Found!
//      </p>
     
//       <div className='max-w-lg'>
//      <img className='rounded' src={PageNotFoundImage} alt='404 Page Not Found' />
//      </div>
     
//     </div>

//     <div className='flex justify-center my-4'>
//       <Link to="/">
//      <button className=' w-64 text-xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  rounded  px-2 py-2.5 dark:text-white mr-2 mb-2'>Back Home</button>
//      </Link>
//     </div>

//    </section>

//     </main>
//   )
// }


import { Link } from "react-router-dom";
import PageNotFoundImage from "../assets/pagenotfound.png"
 

export const PageNotFound = () => {
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">404, Oops!</p>
          <div className="max-w-lg">
            <img className="rounded" src={PageNotFoundImage} alt="404 Page Not Found" />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
          <button className=' w-64 text-xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  rounded  px-2 py-2.5 dark:text-white mr-2 mb-2'>Back Home</button>    
          </Link>          
        </div>
      </section>
    </main>
  )
}
