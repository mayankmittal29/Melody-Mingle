const typewriter = document.getElementById('typewriter');
const messages = ["HELLO", "Welcome to Beatstreet"];
let index = 0;
let messageIndex = 0;

function type() {
  if (index === messages[messageIndex].length) {
    setTimeout(erase, 1000);
    return;
  }
  typewriter.innerHTML += messages[messageIndex].charAt(index);
  index++;
  setTimeout(type, 100);
}

function erase() {
  if (index === 0) {
    messageIndex++;
    if (messageIndex === messages.length) {
      return;
    }
    setTimeout(type, 500);
    return;
  }
  typewriter.innerHTML = messages[messageIndex].substring(0, index-1);
  index--;
  setTimeout(erase, 100);
}

type();
