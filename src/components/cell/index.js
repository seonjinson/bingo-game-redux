import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators as actions } from '../../reducer';
import Cell from './cell';


function mapStateToProps(state) {
  const { isPlaying } = state;
  return {
    isPlaying
  };
}

function mapDispatchToProps(dispatch){
  return {
    startGame: bindActionCreators(actions.startGame, dispatch),
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Cell);