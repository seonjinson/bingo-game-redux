import React, { Component } from 'react';
import { connect } from 'react-redux';
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
      name:props.name
    }
  }

  handleSelect(num, row, col) {
    if(this.props.isPlaying){
      //turn check
    if(this.state.name===this.props.isTurn){
      this.props.selectNum(num)
      this.props.thisTurn(this.state.name==='p1'?'p2':'p1')
    }
    else{
      window.alert("잘못 된 차례입니다.")
    }

    //count check

    if(this.state.name==='p1'){
      p1_codi[row][col]=1;
      p1_count = this.isBingo(p1_codi,1);
    }
    else if(this.state.name==='p2'){
      p2_codi[row][col]=1;
      p2_count =this.isBingo(p2_codi,1);
    }   

    if(p1_count>4 || p2_count>4){
      if(p1_count >=5 && p2_count < 5){
        window.alert("1P가 빙고를 완성했습니다.")
      } //1p win
      else if(p2_count >= 5 && p1_count < 5){
        window.alert("2P가 빙고를 완성했습니다.")
      }//2p win
      else{
        window.alert("무승부 입니다.")
      }//무승부
    }
    console.log(`1p: ${p1_count} , 2p: ${p2_count}`)
    console.log(p1_codi);
    }
  }

  componentDidMount() {
    this.setState({
      array: this.state.array
    })
  }

  isActive(isSelected,cell,row,col){  
    if(this.props.isPlaying){
      for(let i=0;i<isSelected.length;i++){
        if(isSelected[i] === cell) {        
          return true;
        }
      }
    }
  }

  handleClick(){
    console.log(this.props.isPlaying)
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
    let { isSelected, array } = this.props;
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

const mapStateToProps = (state) => {
  const { isSelected, isTurn, isPlaying } = state;
  return {
    isPlaying,
    isSelected,
    isTurn
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    thisTurn : (num) => {
      return dispatch(actions.thisTurn(num))
    },
    selectNum : (num) => {
      return dispatch(actions.selectNumber(num))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell);

