//console.log("testing")

//  Part I

// ----------------------------
// write your own forEach() function that takes an array and a function
// ----------------------------

function forEach(array, callback){
  for(var i=0; i < array.length; i++) {
  callback(array[i], i, array);

}
}

// tests
// ---
var total = 1
forEach([1, 2, 3, 4], function(a){ total *= a; })
console.assert(total === 24)

// ----------------------------
// using forEach() from above, write your own reduce()
// that takes an array and a function
// ----------------------------

a = 0

function reduce(array, callback){
    forEach(array, callback)
      array = array[i]+ array
    }
}

// tests
// ---
console.log(
    reduce([1, 2, 3, 4], function(a, v){ return a*v }))
console.assert(
    reduce([1, 2, 3, 4], function(a, v){ return a*v }) === 24)
