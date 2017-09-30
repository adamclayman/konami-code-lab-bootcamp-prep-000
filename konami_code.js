const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let key = 0;

function init() {
  // write your code within this function declaration
  document.addEventListener('keydown', function(event) {
    if (event.which === code[key]) { // Check if event input matches code at the key index

      if (key === 9) { // If the event.which and code[key] successfully match 10 times, execute 'success' code
        window.alert('Congrats! You found the Konami code!');
      }
      key++; // increment the key index for each successful match
    }
    else {
      key = 0; // for any failed match, reset the global key counter to 0
    }
  });
}
init();