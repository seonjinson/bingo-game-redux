//Import


//Actions
const START_GAME = "START_GAME";
const RESTART_GAME = "RESTART_GAME";
const SELECT_NUMBER = "SELECT_NUMBER";
const ROAD_NUMBER = "ROAD_NUMBER"; 
const THIS_TURN = "THIS_TURN";


//Action Creators
function startGame() {
  return {
    type: START_GAME
  }
}
function restartGame() {
  return {
    type: RESTART_GAME
  };
}

function selectNumber(num) {
  return {
    type: SELECT_NUMBER,
    num
  }
}

function roadNumber(num) {
  return {
    type: ROAD_NUMBER,
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
  isRePlaying: false,
  isSelected: [],
  roaded:[],
  isTurn: 'p1'
}

function reducer(state = initialState, action) {
  switch(action.type){
    case START_GAME:
      return applyStartGame(state)
    case RESTART_GAME:
      return applyRestartGame(state);
    case SELECT_NUMBER:
      return applySelectNumber(state, action.num);
    case ROAD_NUMBER:
      return applyRoadNumber(state, action.num);
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
    isPlaying: true
  }
}
function applyRestartGame(state) {
  return {
    ...state,
    isRePlaying: true,
    isSelected: [],
    isTurn: 'p1'
  }
}

function applySelectNumber(state, num) {
  return {
    ...state,
    isSelected: [...state.isSelected, num]
  }
}

function applyRoadNumber(state,num) {
  return {
    ...state,
    roaded: num
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
  selectNumber,
  roadNumber,
  thisTurn
}


//Export Reducer
export { actionCreators };
export default reducer;