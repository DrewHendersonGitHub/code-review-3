function beepBoop(input) {
  input = parseInt(input);
  if (input === 0) {
    return "0";
  }
  if (input === 1) {
    return "0, Beep!"
  }
}

console.log(beepBoop("1"));