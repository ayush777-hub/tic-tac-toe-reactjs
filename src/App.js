import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import lg_bg from './light_back.mp4';
import dark_bg from './dark_back.mp4';
import React,{useEffect, useState} from 'react';
import Navbar from './Components/navabar';
import {lightmode,darkmode} from './ConstantTexts.js'
import { uuid4 } from "uuid4";
import Board from './Components/Board';
import ScoreCard from './Components/ScoreCard';

function App() {
  const [Mode,SetMode] = useState(lightmode);
  const [BoardSt,SetBoardSt] = useState(['.','.','.','.','.','.','.','.','.']);
  const [Turn,SetTurn] = useState('X');
  const [Winner,SetWinner] = useState('Draw');
  const [Scores,SetScores] = useState([0,0,0]);

  
  function PageMode(mode) {
    mode.cur_mode === "light" ? SetMode(darkmode):SetMode(lightmode);
  }

  function HandleResetBoard(e) {
    e.preventDefault();
    SetBoardSt(['.','.','.','.','.','.','.','.','.']);
    SetTurn('X');
    SetWinner('Draw');
  }
  function CheckWinner(symbol) {
    for(let i=0;i<9;i+=3){
      if(BoardSt[i]===BoardSt[i+1] && BoardSt[i+1] ===BoardSt[i+2] && BoardSt[i+1]===symbol){
        return 1;
      }
    }
    for(let i=0;i<3;i+=1){
      if(BoardSt[i]===BoardSt[i+3] && BoardSt[i]===BoardSt[i+6] && BoardSt[i]===symbol){
        return 1;
      }
    }
    if((BoardSt[0]===BoardSt[4] && BoardSt[4]===BoardSt[8]&& BoardSt[0]===symbol)|| (BoardSt[2]===BoardSt[4] && BoardSt[2]===BoardSt[6] && BoardSt[2]===symbol)){
      return 1;
    }
    for(let i=0;i<9;i++){
      if(BoardSt[i]==='.'){
        return 0;
      }
    }
    return -1;
  }

  function HandleResetScoreCard(e){
    HandleResetBoard(e);
    SetScores([0,0,0]);
  }
  function Handlenewentry(tileid) {
    let status = 0;
    if(Turn==='X' && Winner=='Draw'){
      let temp = BoardSt;
      temp[tileid] = 'X';
      SetBoardSt(temp);
      SetTurn('O');
      status = CheckWinner('X');
      console.log(status);
      if(status===1){
        SetWinner('Player1');
        SetScores([Scores[0]+1,Scores[1],Scores[2]]);
      }
      else if(status === -1){
        SetWinner('Drew');
        SetScores([Scores[0],Scores[1],Scores[2]+1]);
      }
    }
    else if(Turn==='O' && Winner=='Draw'){
      let temp = BoardSt;
      temp[tileid] = 'O';
      SetBoardSt(temp);
      SetTurn('X');
      status = CheckWinner('O');
      console.log(status);
      if(status===1){
        SetWinner('Player2');
        SetScores([Scores[0],Scores[1]+1,Scores[2]]);
      }
      else if(status === -1){
        SetWinner('Drew');
        SetScores([Scores[0],Scores[1],Scores[2]+1]);
      }
    }
  }
  return (
    <div style={{bottom:0,top:0,right:0,left:0,position:'absolute'}}>
      <video className="vid" src={Mode.cur_mode === "light"?lg_bg:dark_bg} autoPlay muted loop>
        <source src={Mode.cur_mode === "light"?lg_bg:dark_bg}/>
      </video>
      <div style={{zIndex:10}}>
        <Navbar PageMode={PageMode} Mode={Mode}/>
      </div>
      <div id='Arena'>
        <div className='div-container'>
          <Board Boardconfig={BoardSt} Handlenewentry = {Handlenewentry}/>
          <ScoreCard Score={Scores}></ScoreCard>
        </div>
          <div className='m-1 div-container'>
          <button className='btn btn-danger btn-lg div-container' onClick={(e)=>HandleResetBoard(e)}> <b>Reset Board</b> </button>
          <button className='btn btn-danger btn-lg div-container' onClick={(e)=>HandleResetScoreCard(e)}> <b>Reset ScoreCard</b> </button>
          </div>
      </div>
      <div className='container-fluid mt-3 col-5' style={{padding:'0px'}} >
        {(Winner!=='Draw') &&(Winner==='Player1'?(<h1 id='Result_section'><b>Player A wins !!!</b></h1>):(
          Winner==='Player1'?(<h1 id='Result_section'><b>Player B wins !!!</b></h1>):(<h1 id='Result_section'><b>Match Draw !!!</b></h1>)))}
      </div>
    </div>
  );
}


export default App;
