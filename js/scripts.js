function beepBoop(input) {
  let result = "";
  for (let i = 0; i <= parseInt(input); i++) {
    let value = 0;
    let digits = i.toString().split("");
    digits.forEach(function(digit) {
      for (let j = 1; j <= 3; j++) {
        if (digit === j.toString() && value <= j) {
          value = j;
        }
      }
    });
    if (value === 1) {
      result = result.concat("Beep!, ")
    }
    else if (value === 2) {
      result = result.concat("Boop!, ")
    }
    else if (value === 3) {
      result = result.concat("Won't you be my neighbor?, ")
    }
    else {
      result = result.concat(i.toString() + ", ");
    }
  }
  result = result.split("");
  result.pop();
  result.pop();
  result = result.join("");
  return result;
}

console.log(beepBoop("99"));