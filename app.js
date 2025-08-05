let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = '';

buttons.forEach((element) => {
  element.addEventListener('click', (b) => {
    const btnText = b.target.innerText;

    if (btnText === '=') {
      try {
        string = eval(string);
        inputBox.value = string;
      } catch {
        inputBox.value = 'Error';
        string = '';
      }
    }
    else if (btnText === 'AC') {
      string = '';
      inputBox.value = '';
    }
    else if (btnText === 'DEL') {
      string = string.slice(0, -1);
      inputBox.value = string;
    }
    else if (b.target.id === 'plusMinus') {
      if (string) {
        string = String(-eval(string));
        inputBox.value = string;
      }
    }
    else {
      string += btnText;
      inputBox.value = string;
    }
  });
});

// Handle keyboard input
document.addEventListener('keydown', (event) => {
  const key = event.key;

  if (!isNaN(key) || ['+', '-', '*', '/', '.', '%'].includes(key)) {
    string += key;
    inputBox.value = string;
  } 
  else if (key === 'Enter') {
    try {
      string = eval(string);
      inputBox.value = string;
    } catch {
      inputBox.value = 'Error';
      string = '';
    }
  } 
  else if (key === 'Backspace') {
    string = string.slice(0, -1);
    inputBox.value = string;
  } 
  else if (key.toLowerCase() === 'c') {
    string = '';
    inputBox.value = '';
  }
});
