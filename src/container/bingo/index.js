import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators as actions } from '../../reducer';
import Bingo  from './main';

const mapStateToProps = (state) => {
  const { isRePlaying, isPlaying } = state;
  return {
    isPlaying,
    isRePlaying
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    startGame: bindActionCreators(actions.startGame, dispatch),
    restartGame: bindActionCreators(actions.restartGame, dispatch),
    roadNumToP1 : (num)=>{
      return dispatch(actions.roadNumber_P1(num))
    },
    roadNumToP2 : (num)=>{
      return dispatch(actions.roadNumber_P2(num))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bingo);