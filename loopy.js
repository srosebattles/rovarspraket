// console.log("testing123")
/**
 * PART 0
 *
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else construct available in Javascript.
 */

function max(a, b){

  if (isNaN(a)) {
    //throw Error("That is not a number, my friend")
    return b
  }
  if (isNaN(b)) {
    //throw Error("That is not a number, my friend")
    return a
  }

  if (isNaN(a && b)) {
    //throw Error("That is not a number, my friend")
    return []
  }

  if (Math.max(a,b) === a) {
    return a
  } else {
    return b
  }
}

console.assert(max(1,3) === 3);
console.assert(max(0,3) === 3);
console.assert(max(10,3) === 10);
console.assert(max(-1,-3) === -1);
console.assert(max("aaa",0) === 0);
console.assert(isNaN(max("aaa","bbb")));

/**
 * PART 1
 *
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */

function maxOfThree(a, b, c){

  if (isNaN(a)) {
    return Math.max(b,c)
  }

  if (isNaN(b)) {
    return Math.max(a,c)
  }

  if (isNaN(c)) {
    return Math.max(b,a)
  }
  if (a && b && c === NaN) {
    return []
  } else {
    return Math.max(a,b,c)
  }
}

console.assert(maxOfThree(1,3,2) === 3);
console.assert(maxOfThree(0,3,-1) === 3);
console.assert(maxOfThree(10,3,50) === 50);
console.assert(maxOfThree(-1,-3,-10) === -1);
console.assert(maxOfThree("aaa",0,1) === 1);
console.assert(isNaN(maxOfThree("aaa","bbb","ccc")));

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

function isVowel(char){

  var charNew = char.toLowerCase();

    if (charNew === "a" || "e" || "i" || "o" || "u" || "y") {
      return true
    }
     else {
      return false
    }
}

// console.log(isVowel("y"))
console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);
