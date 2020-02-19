// Import Redux, We don't have to import React, since redux is an independent state management tool.
import { createStore } from 'redux';

// Set the reducer function that updates the state based on the action
const reducer = (state, action) => {
  switch(action.type){
    case "ADD":
      return state + action.payload;
    case "MINUS":
      return state - action.payload;
  }
  return state;
}

// Create store and set its default value to int 0, normally we would have objects with multiple properties but let's keep it simple
const store = createStore(reducer, 0);

// Let's subscribe to log the changes on the state.
store.subscribe(() => {
  console.log(store.getState());
});
 
// "ADD" type will add the payload to the current state.
store.dispatch({type: "ADD", payload: 5});

// "MINUS" type will subtract the payload from the current state.
store.dispatch({type: "MINUS", payload: 3});

//That's all. Here is the redux at it's simplest form.
