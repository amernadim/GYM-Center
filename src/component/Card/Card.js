import React, { useEffect, useState } from 'react';

const Card = () => {
  const [cards,setCards] = useState([]);

  useEffect(() => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setCards(data))
  },[])

  return (
    <div>
      <h2 className='ml-4 text-xl'>Select today’s exercise</h2> 
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
     {
        cards.map(card => <SingleCard></SingleCard>)
      }
     </div>
    </div>
  );
};

const SingleCard = () => {
  return(
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  )
}

export default Card;