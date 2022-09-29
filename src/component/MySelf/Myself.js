import React from 'react';

const Myself = () => {
  return (
    <div>      
   <div className="card card-side bg-base-100 shadow-xl p-3">
    <figure><img className='h-12' src="Avatar.png" alt="Album"/></figure>
    <div className="card-body">
      <h2 className="card-title text-xl">Helena Jahangir</h2>
      <p>Chittagong,Bangladesh</p>
    </div>
    </div>

     <div className='mx-5 my-3 grid grid-cols-3 justify-between'>
      <div className=''>
        <h2 className='text-2xl'>75<small>kg</small></h2>
        <p>Weight</p>
      </div>
      <div className=''>
        <h2 className='text-2xl'>6.5</h2>
        <p>Height</p>
      </div>
      <div className=''>
        <h2 className='text-2xl'>25<small>yrs</small></h2>
        <p>Age</p>
      </div>
     </div>   
    </div>
  );
};

export default Myself;