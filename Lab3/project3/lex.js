function newFunc() {
    const name = "Menna";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = newFunc();
  myFunc();
   
  /*
     .. This code show how a function in JavaScript can form a closure, allowing it to remember and access variables from
          its lexical scope even after that scope has finished executing.
  
    --> "newFunc" function:
            newFunc is a function that defines a variable name and another function displayName within its scope.
    -->  "displayName" function has access to the name variable due to the lexical scope, even though it's defined inside newFunc.

    -->  const myFunc = newFunc();:
           The newFunc function is invoked, and the result is assigned to the variable myFunc.
           When newFunc is called, it returns the inner function displayName. Importantly, the
           returned function maintains a reference to the lexical environment in which it was created, including the name variable("Menna").

    --> myFunc();:
          The myFunc variable now references the displayName function, which was returned from the newFunc invocation.
          When myFunc is called, it executes the displayName function. Despite being called outside the scope of newFunc,
          it still has access to the name variable due to the closure.
*/
/*  --> Output -->
         When myFunc() is invoked, it logs the value of the name variable("Menna") This demonstrates the closure in action because displayName
          remembers the lexical scope in which it was created, even though that scope is technically outside of its current invocation.
 */