import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as utils from '../utils'; 
import { actionCreators as actions } from '../../reducer';

let p1_codi = new Array(5);
    for(let i=0; i<5; i++){
      p1_codi[i] = new Array(5);
    }

let p2_codi = new Array(5);
for(let i=0; i<5; i++){
  p2_codi[i] = new Array(5);
}
let p1_count=0;
let p2_count=0;

class Cell extends Component {
  constructor(props){
    super(props)
    this.state={
      array:['','','','','','','','','','','','','','','','','','','','','','','','',''],
      isActive:false,
      name:props.name
    }
    const { dispatch } = props
    this.boundActionCreators = bindActionCreators(actions, dispatch)
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    let array = utils.random()
    
    this.setState({
      array
    })
    
  }

  handleSelect(num,row,col) {
    if(this.state.name===this.props.isTurn){
      let { dispatch } = this.props
      let addNum = actions.addNumber(num);
        dispatch(addNum)
      let turn = actions.thisTurn(this.state.name==='p1'?'p2':'p1')
        dispatch(turn)
    }
    else{
      window.alert("잘못 된 차례입니다.")
    }
  }

  isActive(isSelected,cell,row,col){  
    for(let i=0;i<isSelected.length;i++){
      if(isSelected[i] === cell) {
        if(this.state.name==='p1'){
          p1_codi[row][col]=1;
          p1_count = this.isBingo(p1_codi,1);
        }
        else if(this.state.name==='p2'){
          p2_codi[row][col]=1;
          p2_count = this.isBingo(p2_codi,1);
        }
        if(p1_count>4 && p2_count>4 && p1_count === p1_count){
          window.alert("무승부 입니다.")
        }else {
          if(p1_count >=5){
            window.alert("1P가 빙고를 완성했습니다.")
          }
          if(p2_count >=5){
            window.alert("2P가 빙고를 완성했습니다.")
          }
        }
        return true;
      }
    }
  }

  isBingo(array,g){
    let countB=0;
      for(let i=0;i<5;i++){
          if(array[0][i]===g&&array[1][i]===g&&array[2][i]===g&&array[3][i]===g&&array[4][i]===g){ //세로
            countB++;
          }
      }
      for(let i=0;i<5;i++){
          if(array[i][0]===g&&array[i][1]===g&&array[i][2]===g&&array[i][3]===g&&array[i][4]===g){ //가로
            countB++;
          }
      }
      if(array[0][0]===g&&array[1][1]===g&&array[2][2]===g&&array[3][3]===g&&array[4][4]===g){ //대각선
        countB++;
      }
      if(array[0][4]===g&&array[1][3]===g&&array[2][2]===g&&array[3][1]===g&&array[4][0]===g){ //대각선
        countB++;
      }
    return countB;
  }

  render() {
    const { isSelected } = this.props;

    const { array } = this.state;
    const { length } = array;
    const maxLength = 5;
    const iteratorCount = length / maxLength;
    let twoDimensionArray = [];

    for (let i = 0; i < iteratorCount; i++) {
	    twoDimensionArray = [
		    ...twoDimensionArray,
		    array.slice(i * maxLength, (i + 1) * maxLength),
	    ];
    }
    const buttonYellow = { backgroundColor: 'yellow' }

    return (
      <div>
        <table>
          <tbody>{twoDimensionArray.map((row, row_i) => {
            let cols = row;
            return <tr key={row_i}>{cols.map((cell, col_i) => {
              return <td key={col_i}><button style={this.isActive(isSelected,cell,row_i,col_i)?buttonYellow:null}
                                    onClick={()=>this.handleSelect(cell,row_i,col_i)}>{cell}</button></td>
              })}</tr>
            })}</tbody>
          </table>
      </div>
    )
  }
}

export default connect(state =>({ 
  isSelected: state.isSelected,
  isPlaying: state.isPlaying,
  isTurn: state.isTurn
}))(Cell);

