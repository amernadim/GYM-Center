import './App.css';
import Card from './component/Card/Card';
import Details from './component/Details/Details';
import Question from './component/Question/Question';

function App() {
  return (
    <div>     
      <div className="grid lg:grid-cols-3 gap-8 grid-cols-1">   
      <div className='col-span-2 lg:ml-20'>
     <Card></Card>
      </div>
     <div className='sm:m-2'>
     <Details></Details>
     </div>
     </div>
     <Question></Question>
    </div>   
  );
}

export default App;
