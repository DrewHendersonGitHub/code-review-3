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
    digits.forEach(function(thing) {
      if (thing === '2') {
        value = 2;
      }
    });
    digits.forEach(function(thing) {
      if (thing === '3') {
        value = 3;
      }
    });
    if (value === 1) {
      result = result.concat("Beep!, ")
    }
    if (value === 2) {
      result = result.concat("Boop!, ")
    }
    if (value === 3) {
      result = result.concat("Won't you be my neighbor?, ")
    }
    if (value === 0) {
      result = result.concat(i.toString() + ", ");
    }
  }
  return result;
}

console.log(beepBoop("13"));