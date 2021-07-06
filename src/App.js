import './css/App.css'
import Header from './components/Header'

function App() {
  const data = 'Aswin Jagadeesh A'
  return (
    <div>
      <Header data = {data}/>
      <h1 className='welcome'>Welcome</h1>
      <Hello/>
    </div>
  );
}

export default App;

function Hello(){
  return(
    <h1 className='hello'>Hello Guys</h1>
  )
}