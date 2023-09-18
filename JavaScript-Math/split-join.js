const lyrics = "tumi bondhu kala pakhi. ami jeno ki";

// split
const parts = lyrics.split(" ");
console.log(parts);
const sentence = lyrics.split('.');
console.log(sentence);
const chars = lyrics.split('');
console.log(chars);

// slice
const slicing = lyrics.slice(0,11);
console.log(slicing);

// substring
const subStrings = lyrics.substring(0,11);
console.log(subStrings);

// positive
const prototype = lyrics.at(5);
console.log(prototype);

// Negative
const prototype2 = lyrics.at(-5);
console.log(prototype2);

// for symbole or character
console.log(String.fromCharCode(189, 43, 190, 61));

// concat
const first = " hello";
const second = "world ";
const concatenation = first.concat(' ',second);
console.log(concatenation);

// remove white space from the start and after the end
console.log(concatenation.trim());

// join
const lines = ["Tumi bondhu","Kala pakhi", "Ami jeno ki"];
const newSong = lines.join('. ');
console.log(newSong);