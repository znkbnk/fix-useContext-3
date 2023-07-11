//incorrect

import React, useContext from "react";

const MyContext = React.createContext();

function ComponentA() {
  const value = useContext();

  return (
    <div>
      <h2>Component A</h2>
      <p>{value}</p>
    </div>
  );
}

function ComponentB() {
  const value = useContext();

  return (
    <div>
      <h2>Component B</h2>
      <p>{value}</p>
    </div>
  );
}

function ParentComponent() {
  const value = "Hello, World!";

<MyContext.Provider value={value}>
    <h1>Parent Component</h1>
        <ComponentA />
        <ComponentB />
</MyContext.Provider>
  ;
}

export ParentComponent;
