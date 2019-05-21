// if statements, for loops, functions are a few examples of when a scope is declared e.g. function(){Scope of the function would be here}
function celebrate(){ // <-- this is a function scope.
  // This is the local scope of the celebrate function
  const Hooray = 'Hoooooray!';
  // ^ This const is only accessible inside of celebrates scope (curly brackets)
  function sayHooray() {
    console.log(Hooray);
  }

  // Now we have a function (with it's own scope) inside of another function!
  // We can invoke it normally but once we leave celebrates scope...
  sayHooray();
}
// It throws an error...
sayHooray(); // Error: sayHooray is not defined.
// Now, we want to be able to say hooray without declaring it again. How would we get the function into the global scope?

function howToScope() {
  let first = 1;
  let second = 2;
  return first;
}