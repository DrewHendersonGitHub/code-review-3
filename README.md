# _Mr. Roboger's Neighborhood_

#### By _**Andrew Henderson**_

#### _If you've ever wondered what a robotic Mr. Rogers would look like_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _JQuery_

## Description

_This webpage converts a number entered by the user into a sequence of numbers from zero that that number. It also converts some of the numbers into words and phrases, and allows the user to reverse the order of the sequence or enter their own name in for a personalized message._

## Setup/Installation Requirements

* _In the repository, click the green code button and select download ZIP_
* _Unzip the files into desired directory_
* _Open the index.html inside an internet browser_

## Known Bugs

* _There are currently no known bugs_

## License

_Copyright 2021 Andrew Henderson_

_Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:_

_The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software._

_THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE._

Copyright (c) _2021_ _Andrew Henderson_
\
\
\
\
\
Tests:

Describe: beepBoop()
\
\
Test: "It should return "0" if "0" is input."

Code: beepBoop("0");

Expected Output: "0"
\
\
\
Test: "It should return "0, Beep!" if the the input is 1."


Code: beepBoop("1");

Expected Output: "0, Beep!"

\
\
\
Test: "Any number that contains 1 should be replaced with Beep!"

Code: BeepBoop("1");

Expected Output: "0, Beep!"

\
\
\
Test: "Any number that contains 2 should be replaced with Boop! even if it also contains 1."

Code: BeepBoop("12");

Expected Output: "0, Beep!, Boop!, 3, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, "
\
\
\
Test: "Any number that contains 3 should be replaced with Won't you be my neighbor? even if it also contains a 1 or 2."

Code: beepBoop("13");

Expected Output: "0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, Won't you be my neighbor?, "