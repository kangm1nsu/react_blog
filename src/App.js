import logo from './logo.svg';
import './App.css';

function App() {

  let posts = '맛집임';
  function 함수(){
    return 100
  }
  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>
      <h4>{ 함수() }</h4>
    </div>
  );
}

export default App;
