import React from 'react';
import './App.css'
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import RouteChange from './RouteChange';

const initialState={
  isSignedin: false,
  user:{
    id:0,
    userName:'',
    email:'',
    permissions:0
  },
  dolar:0
}

function reducer(state,action){
  switch(action.type){
    case 'SET_LOGED_USER': {
      return {...state, isSignedin:true, user:{
        id:action.payload.id,
        userName:action.payload.user,
        email:action.payload.email,
        permissions:action.payload.permissions
      }}
    }
    case 'LOGOUT':{
      return {initialState}
    }
    default:{
      return state
    }
  }
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
