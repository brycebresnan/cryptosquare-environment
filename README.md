input characters from user
remove spacing and punctuation
lowercase everything
identify length of characters
-identify smallest closest square root of char length

-to find a remainder: take the closest square, then square it, subtract from the character length 

if there is a remainder on the sqrt then an addtl row will be addedlengthFinder()
-add addtl "row" if there is a remainder

HARD STUFF: 

if characterCount === 0:
use math.sqrt(characterCount)
else:
use math.sqrt()

grab the sqrt number, using that to incrementily grab the words
starting at 0 index, grabbing each number by sq rt number, increasing index by 1 eah time until theres no more. then, breaking those in to pieces

aaaabbbbccccdddd

1a  2a  3a  4a
5b  6b  7b  8b
9c  10c 11c 12c
13d 14d 15d 16d

abcdabcdabcdabcd

a a a a a  17
b b b b b
c c c c c
e e - - - 
- - - - -

a a a  15
b b b
c c c
d d d
e e e



output text reads top to bottom, left to right

column looping over array 
math.sqrt()
math.floor()



Describe: stringPrep()

Test: "will remove spaces/punction from input string"
Code: stringPrep("I have seven chickens");
Expected output: "Ihavesevenchickens"

Test: "will return lowercase string from input"
Code: stringPrep("I have 7 CHICKENS!!");
Expected output: "ihavechickens"


Describe: characterCounter()

Test: "It should find the length of the prepped string.
Code:
text = "onethtworeefour"
lengthFinder(text);
Expected Output: 15


Describe: characterSquare()

Test: "It should return the square root of a given number."
Code:
let number = 16
characterSquare(number);
Expected Output: 4

Test: "It should return only the smallest square that is "

