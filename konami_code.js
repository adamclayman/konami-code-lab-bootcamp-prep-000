const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let key = 0;

function init() {
  // write your code within this function declaration
  document.addEventListener('keydown', function(event) {
    if (event.which === code[key]) {

      if (key === 9) {
        window.alert('Congrats! You found the Konami code!');
      }
      key++;
    }
    else {
      key = 0;
    }
  });
}
