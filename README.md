This code project provides an introduction
to using the React useContext hook by
creating a parent component that provides
a context value and two child components
that consume that value. The intentional
mistakes included in the code serve as
practice exercises for the coder to
identify and fix the issues.

Mistake 1: Missing curly braces when
importing useContext
To fix this, update the import statement
for the useContext hook to includecurly
braces.

Mistake 2: Incorrect usage of the
createContext function
To fix this, remove the unnecessary 
React prefix.

Mistake 3: Missing argument in the
useContext hook
To fix this, update the useContext 
lines in both ComponentA and ComponentB
to pass the MyContext variable as 
an argument.

Mistake 4: Incorrect rendering of
the components in ParentComponent
To fix this, wrap the multiple components
rendered in ParentComponent inside a
single root element. Add a div around 
the h1 and the components being rendered.

Mistake 5: Missing return statement
in ParentComponent
To fix this, add a return statement 
before the opening parenthesis of
the JSX code.

Mistake 6: Incorrect export statement
To fix this, update the export statement
to use export default.
