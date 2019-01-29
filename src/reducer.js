//Import


//Actions
const START_GAME = "START_GAME";
const RESTART_GAME = "RESTART_GAME";
const ADD_NUMBER = "ADD_NUMBER"; 
const THIS_TURN = "THIS_TURN";


//Action Creators
function startGame() {
  return {
    type: START_GAME
  };
}

function restartGame() {
  return {
    type: RESTART_GAME
  };
}

function addNumber(num) {
  return {
    type: ADD_NUMBER,
    num
  }
}

function thisTurn(who) {
  return {
    type: THIS_TURN,
    who
  }
}

//Reducer
const initialState = {
  isPlaying: false,
  isSelected: [],
  isTurn: 'p1'
}

function reducer(state = initialState, action) {
  switch(action.type){
    case START_GAME:
      return applyStartGame(state);
    case RESTART_GAME:
      return applyRestartGame(state);
    case ADD_NUMBER:
      return applyAddNumber(state, action.num);
    case THIS_TURN:
      return applyThisTurn(state, action.who)
    default:
      return state
  }
}

//Reducer Function
function applyStartGame(state) {
  return {
    ...state,
    isPlaying: true,
  }
}

function applyRestartGame(state) {
  return {
    ...state,
    isPlaying: false
  }
}

function applyAddNumber(state, num) {
  return {
    ...state,
    isSelected: [...state.isSelected, num]
  }
}

function applyThisTurn(state, who) {
  return {
    ...state,
    isTurn: who
  }
}


//Export Action Creators
const actionCreators = {
  startGame,
  restartGame,
  addNumber,
  thisTurn
}


//Export Reducer
export { actionCreators };
export default reducer;