import React from 'react';
import './App.css'
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import RouteChange from './RouteChange';

const initialState={
  isSignedin: true,
  user:{
    userName:'',
    email:'',
    permissions:0
  },
  dolar:0
}

function reducer(state,action){
  return state
}

const store = createStore(reducer, initialState);

function App() {
  return (
    <Provider store={store}>
      <RouteChange/>
    </Provider>
  );
}

export default App;
