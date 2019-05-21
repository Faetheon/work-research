/**
 * Thief!
 * Find a way to keep the theif from stealing your money by using the vault() functions scope.
 */

function vault() {
  // Your code goes here.
}

let yourMoney = 100;
let theifsMoney;

function thief() {
  const note = 'Haha! You got robbed!'
  function steal() {
    theifsMoney = yourMoney;
  }

  steal();
  if(yourMoney) {
    yourMoney = note;
  } else {
    console.log('No fair! You hid your money :(');
  }
}

theif();