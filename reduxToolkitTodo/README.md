# Redux


- Store (configureStore)
- Action (An action is a plain JavaScript object that describes what should happen in the application.)
- Reducer (functionality to make changes to state)
- Slice (Encapsulates the creation of reducer and action into single file)
- useSelector (provided access to state)
- useDispatcher (make change to state via reducer)




## Slice

### In Redux Toolkit, a slice is a way to encapsulate a piece of the application's state along with the reducers and actions that handle updates to that state—all in a single file. It simplifies the process of defining Redux state and actions compared to traditional Redux, which requires separate files for actions, action types, and reducers.


## Action And Reducer

```
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

```


# Notes

### Changing the values in store will rerender all the components that are consuming it.