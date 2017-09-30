const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let key = 0;

function init() {
  // Write your JavaScript code inside the init() function

  document.body.addEventListener('keydown', function(event) {
    // Increment key if the keycode matches.
    if (code[key++] === event.keyCode) {
      if (key === 10) {
        alert(`Congrats! You found the Konami code!`);
      }
    }
    else {
      key = 0;
    }
}
/*
  document.body.addEventListener('keydown', function(event) {
    if (event.which === '38') {
      for (i = 1; i < code.length; i++) {
        if (Object.keys(event)[i] === code[i]) {
          continue;
        }
        else return null;
      }
    }
    alert('Congrats! You found the Konami code!');
  });
}
*/
