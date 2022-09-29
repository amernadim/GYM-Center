import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDumbbell} from '@fortawesome/free-solid-svg-icons'

const Card = ({addToCard}) => {
  const [cards,setCards] = useState([]);
//  console.log(addToCard());

  useEffect(() => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setCards(data))
  },[])

  return (
    <div className='mt-5'>
       <div className="navbar bg-base-100">
  <a href='/' className="btn btn-ghost normal-case text-2xl"><FontAwesomeIcon icon={faDumbbell} className='mr-4'/> Tiger Gym</a>
      </div>
      <h2 className='ml-4 text-xl'>Select today’s exercise</h2> 
     <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-4'>
      {
        cards.map(card => <SingleCard key={card.id} card={card} addToCard={addToCard}></SingleCard>)
      }
     </div>
    </div>
  );
};

const SingleCard = ({card,addToCard}) => {
// const SingleCard = ({card,AddToList}) => {
  // const {AddToCard} =props.AddToCard;
  // const {addToCard} = props.addToCard;
  // console.log(addToCard());
  const{age ,img,time,name} = card;
  return(
    <div className="card card-compact w-96 bg-base-100 shadow-xl w-full">
  <figure><img className='w-full rounded h-40 sm:h-56' src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>For Age : {age}</p>
    <p>Time required : <span>{time}</span>s</p>
    <div className="card-actions justify-end">
      <button onClick={() => addToCard(time)} className="btn btn-primary btn-sm w-full">Add To List</button>
    </div>
  </div>
</div>
  )
}

export default Card;