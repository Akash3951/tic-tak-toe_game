import React from 'react'
import './Game.css'
import {useState} from 'react';
import Square from './Square';

const Game = () => {

  const [entries, setEntries]=useState(new Array(9).fill(null));

  const winnerCheck= function(){
    const winner = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

    for(const [a,b,c] of winner){
      if(entries[a]!==null && entries[a] === entries[b] && entries[a] === entries[c]){
        return true;
      }
      else return false;
    }
  }
  const isWinner = winnerCheck();

  const [isTurnX, setIsTurnX]= useState(true);

  const handleClick=function(index){
    console.log('clicked', index)
    const copyEntries = [...entries];
    copyEntries[index] = isTurnX ? 'X' :'O';
    setEntries(copyEntries);
    setIsTurnX(!isTurnX);
  }

 
  return (
    <main className='main'>
      {
        isWinner ? <h1>someone is winner</h1> :
      
        <div className='game'>
          <div className="row-container">
            <Square onClick={()=>handleClick(0)} value={entries[0]}/>
            <Square onClick={()=>handleClick(1)} value={entries[1]}/>
            <Square onClick={()=>handleClick(2)} value={entries[2]}/>
          </div>
          <div className="row-container">
            <Square onClick={()=>handleClick(3)} value={entries[3]}/>
            <Square onClick={()=>handleClick(4)} value={entries[4]}/>
            <Square onClick={()=>handleClick(5)} value={entries[5]}/>
          </div>
          <div className="row-container">
            <Square onClick={()=>handleClick(6)} value={entries[6]}/>
            <Square onClick={()=>handleClick(7)} value={entries[7]}/>
            <Square onClick={()=>handleClick(8)} value={entries[8]}/>
          </div>
        </div>
      }
    </main>
  )
}

export default Game
