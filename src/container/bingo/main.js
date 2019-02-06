import React, { Component } from 'react';
import * as utils from '../../components/utils'; 
import Cell from '../../components/cell/cell';

class Bingo extends Component {
  constructor(props){
    super(props);
    this.state={
      restartGame: this.props.restartGame,
      startGame: this.props.startGame,
      array1: ['','','','','','','','','','','','','','','','','','','','','','','','',''],
      array2: ['','','','','','','','','','','','','','','','','','','','','','','','','']
    }
  }

  async handleRoad() {
    let array1 = utils.random();
    let array2 = utils.random();

    await this.setState({
      array1,
      array2
    }) 
    this.props.roadNumToP1(this.state.array1);
    this.props.roadNumToP2(this.state.array2);
  }

  handleReStart() {
   this.state.restartGame();
    this.handleRoad();
  }

  handleStart() {
    this.state.startGame();
    this.handleRoad()
  }

  render() {
    let { isPlaying } = this.props;
    
    return(
      <div>
        <div>
          {!isPlaying ? <button onClick={()=>this.handleStart()}>게임 시작</button> : <button onClick={()=>this.handleReStart()}>게임 재시작</button>}
          <div>
            <p>P1</p>
            <Cell name="p1" array={this.state.array1}/>
          </div>
          <div>
            <p>p2</p>
            <Cell name="p2" array={this.state.array2}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Bingo;
