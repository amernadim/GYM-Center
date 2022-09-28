import React, { useEffect, useState } from 'react';

const Card = () => {
  const [cards,setCards] = useState([]);

  useEffect(() => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setCards(data))
  },[])

  return (
    <div className='mt-5'>
      <h2 className='ml-4 text-xl'>Select today’s exercise</h2> 
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-4'>
      {
        cards.map(card => <SingleCard key={card.id} card={card}></SingleCard>)
      }
     </div>
    </div>
  );
};

const SingleCard = (props) => {
  // console.log(props);
  const{age ,img,time,name} = props.card
  return(
    <div className="card card-compact w-96 bg-base-100 shadow-xl w-full">
  <figure><img className='w-full rounded h-56' src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>For Age : {age}</p>
    <p>Time required : <span>{time}</span>s</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary btn-sm w-full">Add To List</button>
    </div>
  </div>
</div>
  )
}

export default Card;