//action creators
// import store from 'react-redux'
// import React from 'react';
// import {useDispatch} from 'react-redux';


// export const ToggleMenu = () => {
//     const dispatch = useDispatch();
//     const action = { type: 'TOGGLE_SIDE_MENU',  payload: null};
//     dispatch(action);
// }

const actions = {
  TOGGLE_SIDE_MENU: 'TOGGLE_SIDE_MENU',
  ADD_VALUE: 'ADD_VALUE',
};

export const toggleMenu = () => {
  return {
    type: actions.TOGGLE_SIDE_MENU, payload: 0
  }
}

export const addValue = () => {
  return {
    type: actions.ADD_VALUE, payload: 3
  }
}