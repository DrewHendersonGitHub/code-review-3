Describe: beepBoop()

Test: "It should return "0" if "0" is input."
Code: beepBoop("0");
Expected Output: "0"

Test: "It should return "0, Beep!" if the the input is 1."
Code: beepBoop("1");
Expected Output: "0, Beep!"

Test: "Any number that contains 1 should be replaced with Beep!"
Code: BeepBoop("1");
Expected Output: "0, Beep!"

Test: "Any number that contains 2 should be replaced with Boop! even if it also contains 1."
Code: BeepBoop("12");
Expected Output: "0, Beep!, Boop!, 3, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, "

Test: "Any number that contains 3 should be replaced with Won't you be my neighbor? even if it also contains a 1 or 2."
Code: beepBoop("13");
Expected Output: "0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, Won't you be my neighbor?, "