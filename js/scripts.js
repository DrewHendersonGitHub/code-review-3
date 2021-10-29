function beepBoop(input) {
  let result = "";
  for (let i = 0; i <= parseInt(input); i++) {
    let choice = 0;
    let digits = i.toString().split("");
    digits.forEach(function(digit) {
      for (let j = 1; j <= 3; j++) {
        if (parseInt(digit) === j && choice < j) {
          choice = j;
        }
      }
    });
    if (choice === 1) {
      result = result.concat("Beep!, ")
    }
    else if (choice === 2) {
      result = result.concat("Boop!, ")
    }
    else if (choice === 3) {
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

$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    $(".results").text(beepBoop($("input#input").val()));
    $("#results").show();
  });
});