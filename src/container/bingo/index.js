import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators as actions } from '../../reducer';
import Bingo from './main';


function mapStateToProps(state) {
  const {isPlaying} = state;
  return {
    isPlaying
  };
}

function mapDispatchToProps(dispatch){
  return {
    startGame: bindActionCreators(actions.startGame, dispatch),
    restartGame: bindActionCreators(actions.restartGame, dispatch)
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Bingo);