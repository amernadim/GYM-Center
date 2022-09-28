import React from 'react';
import Myself from '../MySelf/Myself';

const Details = () => {
  return (
    <div>
    <Myself></Myself>
    <AddBreak></AddBreak>     
    </div>
  );
};

const AddBreak = () => {
  return (
    <div className='mt-10 ml-4'>
      <h2 className="text-xl font-bold">Add A Break</h2> 
      <div className='mt-5 grid grid-cols-5 gap-2'>
       <a className='hover:bg-primary hover:text-white hover:rounded-full p-1 text-xl text-center' href="/"><span>10</span>s</a>
       <a className='hover:bg-primary hover:text-white hover:rounded-full p-1 text-xl text-center' href="/"><span>20</span>s</a>
       <a className='hover:bg-primary hover:text-white hover:rounded-full p-1 text-xl text-center' href="/"><span>30</span>s</a>
       <a className='hover:bg-primary hover:text-white hover:rounded-full p-1 text-xl text-center' href="/"><span>40</span>s</a>
       <a className='hover:bg-primary hover:text-white hover:rounded-full p-1 text-xl text-center' href="/"><span>50</span>s</a>
        
      </div>    
    </div>
  )
}

export default Details;