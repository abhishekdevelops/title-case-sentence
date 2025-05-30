let sentence="i LOve JAVAscript";
let lowerCased=sentence.toLowerCase();
console.log("Lower Case:",lowerCased);

let words=lowerCased.split(" ");
console.log("Words:",words);

let titlecasedWords=[];

for(let i=0;i<words.length;i++){
   let firstLetter=words[i][0].toUpperCase();
    let restOfWord=words[i].slice(1);
    let capitalized= firstLetter+restOfWord;
    titlecasedWords.push(capitalized);
}
console.log("Final Result:",titlecasedWords)
