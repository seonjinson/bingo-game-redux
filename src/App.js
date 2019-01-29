import React, { Component } from 'react';
import Bingo from './container/bingo';
import reducer from './reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <div className="App">
          <Provider store={store}>
            <Bingo/>
          </Provider>
      </div>
    );
  }
}

export default App;
