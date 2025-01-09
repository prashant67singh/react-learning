import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello world",
    },
  ],
  editTodo: {},
};

/*
In Redux Toolkit, a slice is a way to encapsulate a piece of the application's state along with the reducers and actions that handle updates to that state—all in a single file. It simplifies the process of defining Redux state and actions compared to traditional Redux, which requires separate files for actions, action types, and reducers.
*/

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        editTodo: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      console.log(action.payload);  
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
      state.editTodo = [];
    },
    editingTodo: (state, action) => {
      state.editTodo = {...action.payload}
    },
  },
});

export const { addTodo, removeTodo, updateTodo, editingTodo } =
  todoSlice.actions;

// Actions definition under pure redux. This has to be defined manually.
/*

 ***Action definiton***
 const addTodo = {
    type: 'ADD_TODO',       // Mandatory
    payload: { id: 1, text: 'Learn Redux' } // Optional
  };

***Reducer definiton***
const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload]; // Adds a new todo
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload); // Removes a todo
    default:
      return state; // Returns unchanged state for unrecognized actions
  }
};


*** In Redux we dispatched action, dispatch(actionCreater)

dispatch({ type: 'ADD_TODO', payload: { id: 1, text: 'Learn Redux' } });


***Reducer Processes Action

const newState = todoReducer([], { type: 'ADD_TODO', payload: { id: 1, text: 'Learn Redux' } });

*/

// Actions definition under pure redux toolkit. It automatically gets generated with slice.actions
/*
  const { addTodo, removeTodo } = todoSlice.actions;
  
  What happens under the hood?

  1. createSlice processes the reducers:

    It generates action types based on the reducer names:
        'todos/addTodo'
        'todos/removeTodo'

  2. Action Creators:

     It creates functions for these action types.
        Each action creator returns an action object with:
            type: Auto-generated from the slice name and reducer key.
            payload: Data passed when calling the action
*/

export default todoSlice.reducer;
