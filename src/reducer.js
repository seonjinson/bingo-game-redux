//Import


//Actions
const START_GAME = "START_GAME";
const RESTART_GAME = "RESTART_GAME";
const SELECT_NUMBER = "SELECT_NUMBER";
const ROAD_NUMBER_P1 = "ROAD_NUMBER_P1"; 
const ROAD_NUMBER_P2 = "ROAD_NUMBER_P2"; 
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

function roadNumber_P1(num) {
  return {
    type: ROAD_NUMBER_P1,
    num
  }
}

function roadNumber_P2(num) {
  return {
    type: ROAD_NUMBER_P2,
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
  p1_roaded:[],
  p2_roaded:[],
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
    case ROAD_NUMBER_P1:
      return applyRoadNumber_P1(state, action.num);
    case ROAD_NUMBER_P2:
      return applyRoadNumber_P2(state, action.num);
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

function applyRoadNumber_P1(state,num) {
  return {
    ...state,
    p1_roaded: num
  }
}

function applyRoadNumber_P2(state,num) {
  return {
    ...state,
    p2_roaded: num
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
  roadNumber_P1,
  roadNumber_P2,
  thisTurn
}


//Export Reducer
export { actionCreators };
export default reducer;