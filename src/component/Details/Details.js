import React from 'react';
import Myself from '../MySelf/Myself';

const Details = ({times}) => {
  console.log(times);
  return (
    <div>
    <Myself></Myself>
    <AddBreak></AddBreak> 
    <Exercise time={times}></Exercise>    
    </div>
  );
};

const AddBreak = () => {
  return (
    <div className='mt-10 ml-4'>
      <h2 className="text-xl font-bold">Add A Break</h2> 

      <div className='mt-5 grid grid-cols-5 gap-2'>
       <p className='hover:bg-primary hover:text-white hover:rounded-full p-1 text-xl text-center'><span>10</span>s</p>
       <p className='hover:bg-primary hover:text-white hover:rounded-full p-1 text-xl text-center'><span>20</span>s</p>
       <p className='hover:bg-primary hover:text-white hover:rounded-full p-1 text-xl text-center'><span>30</span>s</p>
       <p className='hover:bg-primary hover:text-white hover:rounded-full p-1 text-xl text-center'><span>40</span>s</p>
       <p className='hover:bg-primary hover:text-white hover:rounded-full p-1 text-xl text-center'><span>50</span>s</p>
        
      </div>    
    </div>
  )
};

const Exercise = ({time}) => {
  return (
    <div className='ml-4 mt-5'>
      <h2 className="text-xl font-bold"> Exercise Details</h2> 

      <div className="card card-side bg-base-100 shadow-xl p-3">   
        <div className="flex gap-10 lg:gap-20">
        <h2 className='text-bold text-lg'>Exercise time</h2>
        <p className='text-bold text-lg'><span>{time}</span> seconds</p>
        </div>
      </div>

      <div className="card card-side bg-base-100 shadow-xl p-3 mt-2">   
        <div className="flex gap-10 lg:gap-24 ">
        <h2 className='text-bold text-lg'>Break time</h2>
        <p className='text-bold text-lg'><span>15</span> seconds</p>
        </div>
      </div>

      <button className="btn btn-primary btn-sm w-9/12 mt-2 flex mx-auto">Activity Completed</button>
     
    </div>
  )
}

export default Details;