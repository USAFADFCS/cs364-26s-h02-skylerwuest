/*
 * name: Skyler Wuest
 * CS364 - H2
 * Documentation: I went to a random stack overflow for help on something
 * but it didnt actually end up helpin me but i did notice that you can do things like this
 * [a-z-A-Z-0-9] and thats what I got from stack.
 * C2C Brody snyder said that I should put the word boundaries on 1.
 * 
 * With number 9 i got help from the lesson 6 course slides.
 */

//1: match the word "hello" X
const regex01 = /\bhello\b/;

//2: match phone numbers in the format (123) 456-7890 X
const regex02 = /\(\d{3}\)\s\d{3}-\d{4}/;

//3: match valid email addresses X
const regex03 = /([a-z-A-Z-0-9]+(.[a-z]+))+\@((gmail|hotmail|icloud)|([a-z-A-Z]+))((.com|.mil|.gov)|(.[a-z]+)+)/

//4: find all words that start with a capital letter
const regex04 = /[A-Z]{1}[a-z]+/; 

//5: match strings with any one of these characters: ; [, ], {, }, ^
const regex05 = /([a-z-A-Z-0-9]*)(\;*\[*\]*\{*\}*\^*)+([a-z-A-Z]*)/;

//6: match dates in the format DD/MM/YYYY X
const regex06 = /\d{2}\/\d{2}\/\d{4}/; 

//7: find all words that are exactly 4 characters long X
const regex07 = /\b[a-z-A-z]{4}\b/

//8: to find sequences where any character is repeated three or more times 
const regex08 = /[A-Z]+{3}/; 

//9: match URLs starting with http:// or https://
const regex09 = /(https?:\/\/)([\da-z\.-]+)\.([a-z\.]+)([\/\w \.-]*)*\/?$/;

//10: Validate a Password
const regex10 = /(([A-Z]+)([a-z]+)(\d+))/; //does not work for the atleast 8


