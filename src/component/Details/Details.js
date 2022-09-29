import React, { useEffect, useState } from 'react';
import Myself from '../MySelf/Myself';
import Swal from 'sweetalert2'


const Details = ({times}) => {
  const [breack,setBreack] = useState(0);

  useEffect(()=> {
    const localStorageData = localStorage.getItem('breackTime');
    setBreack(localStorageData);
  },[breack])

  const breakTime = (breackTime) => {
    localStorage.setItem("breackTime", breackTime);
      setBreack(breackTime);  
  }
  return (
    <div>
    <Myself></Myself>
    <AddBreak breakTime={breakTime}></AddBreak> 
    <Exercise breack={breack} time={times}></Exercise>    
    </div>
  );
};


const AddBreak = ({breakTime}) => {
  return (
    <div className='mt-10 ml-4'>
      <h2 className="text-xl font-bold">Add A Break</h2> 

      <div className='mt-5 grid grid-cols-5 gap-2'>
       <p className='hover:bg-primary hover:text-white hover:rounded-full p-1 text-xl text-center' onClick={() => breakTime(10)}>10s</p>
       <p className='hover:bg-primary hover:text-white hover:rounded-full p-1 text-xl text-center' onClick={() => breakTime(20)}>20s</p>
       <p className='hover:bg-primary hover:text-white hover:rounded-full p-1 text-xl text-center' onClick={() => breakTime(30)}>30s</p>
       <p className='hover:bg-primary hover:text-white hover:rounded-full p-1 text-xl text-center' onClick={() => breakTime(40)}>40s</p>
       <p className='hover:bg-primary hover:text-white hover:rounded-full p-1 text-xl text-center' onClick={() => breakTime(50)}>50s</p>
        
      </div>    
    </div>
  )
};

const handleSweetAlert = () => { 
  Swal.fire("Good job!", "Your Activity Completed!", "success");
};

const Exercise = ({time,breack}) => {
 
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
        <p className='text-bold text-lg'><span>{breack}</span> seconds</p>
        </div>
      </div>

      <button className="btn btn-primary btn-sm w-9/12 mt-2 flex mx-auto" onClick={handleSweetAlert}>Activity Completed</button>
     
    </div>
  )
};

export default Details;