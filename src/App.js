import { useEffect, useState } from 'react';
import './App.css';
import Card from './component/Card/Card';
import Details from './component/Details/Details';
import Footer from './component/Footer/Footer';
import Question from './component/Question/Question';

function App() {
  const [times,setTimes] = useState(0)

  const addToCard = (time) => {
    let preTime = times;
    const newtime = time + preTime;
    setTimes(newtime); 
  }

  return (
    <div>     
      <div className="grid lg:grid-cols-3 gap-8 grid-cols-1">   
      <div className='col-span-2 lg:ml-20'>
     <Card addToCard={addToCard} ></Card>
      </div>
     <div className='sm:m-2'>
     <Details times={times}></Details>
     </div>
     </div>
     <Question></Question>
     <Footer></Footer>
    </div>   
  );
}

export default App;
