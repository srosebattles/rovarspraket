/**
 * PART 3
 *
 * Write a function rovarspraket() that will translate
 * a text into a "rövarspråket". That is, double every
 * consonant and place an occurrence of "o" in between.
 *
 * For example, rovarspraket("this is fun") should
 * return the string "tothohisos isos fofunon".

 */

function rovarspraket(word) {

  var results = ""

  for (var i = 0; i < word.length; i++) {

        if (word[i] !== "a" && word[i] !== "e" && word[i] !== "i" && word[i] !== "o" && word[i] !== "u" &&  word[i] !== "y" && word[i] !==  " " && word[i] !== "0"){
          results = results + word[i] + "o" + word[i]
        }

        else {
       results = results + word[i]
        }

     }

  return results
}

// console.log(rovarspraket("cheesecake"))

console.assert(rovarspraket("a") === "a")
console.assert(rovarspraket("b") === "bob")
console.assert(rovarspraket("cat") === "cocatot")
console.assert(rovarspraket("javascript") === "jojavovasoscocroripoptot")
console.assert(rovarspraket(0) === "0")

/**
 * Part 4
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

function reverse(str){
  var backward = ""

  for(i = str.length - 1; i>=0; i-- ){

    backward = backward + str[i]
  }

  return backward
}


// console.log(reverse("Mirror of Erised"))
console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */

function findLongestWord(sentence){
    var arrayWords = sentence.replace(/\'/g,"").split(" ")
    var longestWord = ""

      for (var i = 0; i < arrayWords.length; i++) {
        if (arrayWords[i].length > longestWord.length){
          longestWord = arrayWords[i]
        }
      }

    return longestWord
}

console.assert(findLongestWord("book dogs") === "book")
console.assert(findLongestWord("don't mess with Texas") === "Texas")
