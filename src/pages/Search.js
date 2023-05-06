import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { Card } from '../Component'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react';


export const Search = ({ apiPath }) => {
  
  const[searchParams]=useSearchParams();
  const queryTerm=searchParams.get("q");

  const { data: movies } = useFetch(apiPath,queryTerm);

  useEffect(()=>{
    document.title=`Search result for ${queryTerm}/CineMate`;
   });


  return (
    <main>
       <section className='py-7'>
        <p className='text-3xl text-grey-700 dark:text-white'>
        {movies.length === 0 ? `No Result for '${queryTerm}'` : `Result For '${queryTerm}'`}
        </p>
       </section>
      <section className='max-w-9xl mx-auto py-7'>
        <div className='flex justify-start flex-wrap'>
          {
            movies.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))
          } 
          </div> 
        </section> 
    </main>
  )
}
