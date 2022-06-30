input characters from user
remove spacing and punctuation
lowercase everything
identify length of characters
-identify smallest closest square root of char length

<!-- -to find a remainder: take the closest square, then square it, subtract from the character length 
if there is a remainder on the sqrt then an addtl row will be addedlengthFinder()
-add addtl "row" if there is a remainder -->

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

Test: "If the number is a perfect square, it should return true."
Code:
const number = 16
characterSquare(number);
Expected Output:true

Test: "If the number is not a perfect square, it should return false."
Code:
const number = 17
characterSquare(number);
Expected Output:false

Test: "If the number is a perfect square, it should return the square root of a given number."
Code:
const number = 16
characterSquare(number);
Expected Output: 4

Test: "If the given number is not a perfect square,It should return the smallest square root that is larger than the number of characters."
Code:
const number = 17
characterSquare(number);
Expected Output: 5


Describe squareBuilder();

Test: "It should return a string that's passed into it as an argument." 
Code:
const text = "aaaabbbbccccdddd";
squareBuilder(text);
Expected Output: 'aaaabbbbccccdddd'

Test: "It should take a number and string and return the number and the string"
Code:
const text = "aaaabbbbccccdddd";
const number = 16
squareBuilder(text, number);
Expected Output: ['aaaabbbbccccdddd', 16]

Test: "It should return an array with each character in the text concatenated with an incrementing number."
Code:
const text = "aabb";
const number = 4
squareBuilder(text, number);
Expected Output: ['a0', 'a1', 'b2', 'b3'] 

Test: "It should return an array with each character in the text concatenated with a number that coresponds to it's position in the crypto square. 
Code:
const text = "aabb";
const number = 2
squareBuilder(text, number);
Expected Output: ['a0', 'b2', 'a1', 'b3'] 


Describe
