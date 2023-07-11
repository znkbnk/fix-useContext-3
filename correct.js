//correct

import React, { useContext } from "react";

const MyContext = createContext();

function ComponentA() {
  const value = useContext(MyContext);

  return (
    <div>
      <h2>Component A</h2>
      <p>{value}</p>
    </div>
  );
}

function ComponentB() {
  const value = useContext(MyContext);

  return (
    <div>
      <h2>Component B</h2>
      <p>{value}</p>
    </div>
  );
}

function ParentComponent() {
  const value = "Hello, World!";

  return (
    <MyContext.Provider value={value}>
      <div>
        <h1>Parent Component</h1>
        <ComponentA />
        <ComponentB />
      </div>
    </MyContext.Provider>
  );
}

export default ParentComponent;
