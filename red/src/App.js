import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from './redux/Store/configure'
import RegisterPage from './Component/RegisterPage'
import rootReducer from './redux/Reducers/combineReducer';

const store = configureStore(rootReducer)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
   
    return (
      <Provider store={store}>
       <RegisterPage />
      </Provider>
    );
  }
}

export default App;
