// ************************************************************************************
// https://www.codewars.com/kata/number-of-anagrams-in-an-array-of-words
// An anagram is a word, phrase, or sentence formed from another by rearranging its letters. 
// An example of this is "angel", which is an anagram of "glean".

// Given an array of words write a method that will return the total number of different anagrams 
// inside that array. You can only count once the anagram between 2 words. For instance, in the 
// previous example we show "angel" and "glean" as anagrams, but you don't have to count the opposite 
// between "glean" and "angel".

// Some examples:

// There are 2 anagrams in the array ["dell", "ledl", "abc", "cba"]
// There are 7 anagrams in the array ["dell", "ledl", "abc", "cba", "bca", "bac"]
// ************************************************************************************

function isItAnAnagram(wordA, wordB){
  // console.log(wordA)
  if(wordA.length === wordB.length){
    // const sortedA = wordA.split("");
    const sortedA = [...wordA].sort().join("");
    // const sortedA = Array.from(wordA);
    // console.log("sortedA : ", sortedA)
    const sortedB = wordB.split("").sort().join("");
    return sortedA === sortedB;
  } else {
    return false;
  }
}


// isItAnAnagram("hello", "ellhh");

// SOLUTION WITH 2 FOR LOOPS:
function anagramCounter(someArr){
  counter = 0;
  for(let i=0; i< someArr.length; i++){
    for(let k=i+1; k< someArr.length; k++){
      if(isItAnAnagram(someArr[i], someArr[k])){
        counter++;
      }
    }
  }
  return counter;
}
//   anagramCounter(arr);


const arr = ["hello", "elloh", "sandra", "ansadr", "blah", "hbla"];


// SOLUTION WITH REDUCE AND FILTER
function anagramCounter(someArr){
  const counter = someArr.reduce((sum, theWord,index) => {
    const theRestOfWords = someArr.slice(index+1);
    // console.log(theWord, "====", theRestOfWords);
    const result = theRestOfWords.filter((someWord) => {
      return isItAnAnagram(theWord, someWord)
    })
    return sum + result.length
  }, 0);
  
  return counter;
}
anagramCounter(arr);