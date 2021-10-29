Describe: beepBoop()

Test: "It should return 0 if "0" is input."
Code: beepBoop("0");
Expected Output: "0"

Test: "It should return "0, Beep!" if the first digit is 1
Code: beepBoop("1");
Expected Output: "0, Beep!"

Test: "Any number that contains 1 should be replaced with Beep!"
Code BeepBoop("1")
Expected Output: "0, Beep!"

Test: "Any number that contains 2 should be replaced with Boop! even if it also contains 1"
Code BeepBoop("12")
Expected Output: "0, Beep!, Boop!, 3, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, "