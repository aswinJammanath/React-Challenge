import './css/App.css'
import { useState } from 'react'
import Counter from './Counter'
import Employer from './Employer'

function App() {
  const [count, setCount] = useState(0) //Destructuring; since the return of the fn is an array of two elements
  const [state, setState] = useState(false)
  //let count = 0
  const addCount = () => {
    // count = count +1
    setCount(count + 1)
  };
  let obj = {   //for spread operator, we ca see it below like {...obj}, combining the following variables into one
    title: '1st Counter',
    count
  }
  let emp = [
    {
      name: 'AJ', age: 27
    },
    {
      name: 'RVN', age: 32
    }
  ]
  return (
    <div>
      {/* Never use addCount() */}
      <button onClick={()=>{setState(!state)}}>Click Me</button>
      {/* <h1 className='count'>Counter: {count}</h1> */}
      {/* <Counter title='1st Counter' count={count}/> */}
      {/* {state ? <Counter {...obj} /> : null} */}
      {state && <Counter {...obj} /> }
      {
        emp.map((object, index) =>
         <Employer key={index} {...object} />
        )

      }
    </div>
  );
}

export default App;
