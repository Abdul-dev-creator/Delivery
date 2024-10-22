
import Header from './Header';
import { Mine } from './Mine';




function Landing() {
 

  return (
    <>
   <Header/>
 
   <div className='grid md:grid-cols-2 lg:grid-cols-3 mx-10 md:mx-16 lg:mx-24 gap-4 mt-8'>
    {Mine.map((Mine, index)=>(
       <div key={index} className='border-solid border-2 p-5 rounded-md px-10 '>
        <img src={Mine.Image} alt="" className='mx-auto' />
        <h1 className='text-center text-lg font-bold mt-4'>{Mine.name}</h1>
        <p className='text-[15px]'>{Mine.Desc}</p>
       </div>
    ))}
   </div>
    </>
  )
}

export default Landing
