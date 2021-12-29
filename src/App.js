/* eslint-disable */

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목,글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집','강남 볼거리 추천']);
  let [like,changeLike] = useState(0)

  let posts = '강남 고기 맛집';
  function 제목바꾸기(){
    //글제목에 있던 0번째 데이터를 여자코트 추천으로 바꿈
    var newArray = [...글제목];
    newArray[0] = '여자 코트 추천';
    글제목변경( newArray );
  }

  function 순서바꾸기(){
    var sortArray = [...글제목];
    var sortCount = 0;
    if(sortCount = 0){
      sortArray.sort();

    }else{
      sortArray.reverse()
    }
    
    글제목변경( sortArray );
    sortCount++;
  }

  return (
    <div className="App">
      <div className='black-nav'>
        <div >개발 Blog</div>
      </div>
      <div className="list">
        <button onClick={ 순서바꾸기 }>버튼</button>
        <h3>{ 글제목[0] } <span onClick={ ()=> { changeLike( like +1 ) } }>👍</span> {like} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ 글제목[1] } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ 글제목[2] }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
     
    </div>
  );
}

export default App;
