 
import { Card } from '../Component/Card'
import { useFetch} from '../hooks/useFetch';
import { useEffect } from 'react';
export const MovieList = ({apiPath,title}) => {
 
  const {data:movies}=useFetch(apiPath);
  
  useEffect(()=>{
    document.title=`${title}/CineMate`;
   });

  return (
    <main>
       

       <section className='max-w-9xl mx-auto py-5'>
       <div className='flex justify-start flex-wrap'>
         {movies.map((movie)=>(
         <Card key={movie.id} movie={movie}/>
         ))}
       </div>
       </section>
    </main>
  )
}
