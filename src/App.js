/* eslint-disable */

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목,글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집','강남 볼거리 추천']);
  let [like,changeLike] = useState([0,0,0]);

  
  const [modal, setModal] = useState(false);
  const [myNum, setMyNum] = useState(0);
  const [cInput, setCInput] = useState('');


  function 제목바꾸기(){
    //글제목에 있던 0번째 데이터를 여자코트 추천으로 바꿈
    var newArray = [...글제목];
    newArray[0] = '여자 코트 추천';
    글제목변경( newArray );
  }
  function updateLike(i) {
    const upLike = [...like];
    upLike[i] = upLike[i] + 1;
    changeLike(upLike)
  }
 
 

  return (
    <div className="App">
      <div className='black-nav'>
        <div >개발 Blog</div>
      </div>
      
        <button onClick={ 제목바꾸기 }>버튼</button>
    
    {
      글제목.map(function(list , i) {
        return (
        <div className="list" key={i}>
        <h3 onClick={ ()=> {setMyNum(i)}}>{ list } <span onClick={ ()=> { updateLike(i) } }>👍</span> {like[i]} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>)
      })
    }
    <div className='publish'>
      <input onChange={(e)=> setCInput(e.target.value) }/>
      <button onClick={()=>{
        const copyTitle = [...글제목];
        copyTitle.push(cInput);
        글제목변경(copyTitle)
       }}>저장</button>

    </div>

    <button onClick={()=>setModal(!modal)}>상세보기</button>

    {
      modal === true
      ? <Modal title={글제목} myNum={myNum}></Modal>
      : null
    }
    </div>
  );
}


function Modal(props) {
  return(
    <div className="modal">
        <h2>제목 : {props.title[props.myNum]}</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}



export default App;
