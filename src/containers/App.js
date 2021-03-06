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
  dolar:540000,
  products:[],
  productsFiltered:[],
  modal:{
    showModal:false,
    modalStyle:'edit',
    editModalElement:null
  }
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
    case 'SET_DOLAR':{
      return {...state, dolar:action.payload}
    }
    case 'SET_PRODUCTS':{
      return {...state,products:action.payload,productsFiltered:action.payload}
    }
    case 'FILTER_BY NAME':{
      let productsByName = state.products.filter(product=> product.product.toLowerCase().includes(action.payload));
      return {...state,productsFiltered:productsByName}
    }
    case 'FILTER_BY_CATEGORY':{
      if (action.payload==='T'){
        return{...state,productsFiltered:state.products}
      }else{
        let productsByCategory = state.products.filter(product=> product.category.includes(action.payload));
        return{...state,productsFiltered:productsByCategory}
      }
    }
    case 'SHOW_MODAL':{
      return {...state, modal:action.payload}
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
