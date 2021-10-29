function beepBoop(input) {
  let result = "";
  for (let i = 0; i <= parseInt(input); i++) {
    let value = 0;
    let digits = i.toString().split("");
    digits.forEach(function(thing) {
      if (thing === '1') {
        value = 1;
      }
    });
    if (value === 1) {
      result = result.concat("Beep!, ")
    }
    else {
      result = result.concat(i.toString() + ", ");
    }
    console.log(digits);
    console.log(value);
    console.log(result);
  }
  return result;
}

console.log(beepBoop("122"));