import React, { Component } from 'react';

import Cell from '../../components/cell/cell';

class Bingo extends Component {
  



  render() {
    const { isPlaying, startGame, restartGame } = this.props;
    
    return(
      <div>
        <div>
          
          {!isPlaying ? <button onClick={startGame}>게임 시작</button> : <button onClick={restartGame}>게임 재시작</button>}
          <div>
            <p>P1</p>
            <Cell name="p1"/>
          </div>
          <div>
            <p>p2</p>
            <Cell name="p2"/>
          </div>
        </div>
      </div>
    )
  }
}


export default Bingo;