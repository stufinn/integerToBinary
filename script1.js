const input = '42';
const isInteger = Number.isInteger(parseInt(input));
console.log(isInteger); // true

function convertToBinary() {
  const int = document.getElementById('number').value;
  const isInteger = Number.isInteger(parseFloat(int));
  if (isInteger === true) {
    const result = parseInt(int, 10).toString(2);
    const original_num = document.getElementById('num');

    original_num.innerHTML = int;
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = result;
  } else {
    alert('Enter an integer please!');
  }

  return;
}

const fart = () => {
  const fartSound = new Audio('../media/fart.wav');
  fartSound.play();
};
