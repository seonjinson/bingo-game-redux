import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import * as utils from '../../components/utils'; 
import Cell from '../../components/cell/cell';
import '../../components/app.css';

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
          <div className="start">
          {!isPlaying ? <Button variant="contained" color="secondary" onClick={()=>this.handleStart()}>게임 시작</Button> : 
            <Button variant="contained" color="secondary" onClick={()=>this.handleReStart()}>게임 재시작</Button>}
          </div>
          <div className="container">
            <p>P1</p>
            <Cell name="p1" array={this.state.array1}/>
          </div>
          <div className="container">
            <p>p2</p>
            <Cell name="p2" array={this.state.array2}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Bingo;
