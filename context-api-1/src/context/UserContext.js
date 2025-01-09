import React from "react";

// Step 1. Create Context
const UserContext = React.createContext();

export default UserContext;

// Every context is provider. it just provide access to variable

// Step.2 For every context we need to create a provider. which will provide data
// Usage

{
    /* <UserContextProvider>
      <Component1></Component1> // has access to data inside userContext
      <Component2></Component2> // has access to data inside userContext
      <Component2></Component2> // has access to data inside userContext
      <Component4></Component4> // has access to data inside userContext
  </UserContextProvider> */
  }