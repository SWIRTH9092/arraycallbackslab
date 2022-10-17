const minions = [
    "bob",
    "kevin",
    "stuart",
    "dave",
    "jerry",
    "mark",
    "tim",
    "phil",
    "carl",
  ]

  //  print out the names of the guys - lower case
  //        using the foreach method
  console.log("*** foreach *** - Expected Output")
  minions.forEach(element => {
    console.log(`${element} is here`)
  });
  
//  print out the names of the guys with the first letter
//  capitialized - all except for kevin.
//  use a map function and created a new array called CapitalizedMinions

console.log()  
console.log("*** capitalizedMinions *** - Expected Output (All except keven lol)")

const capitalizedMinions = minions.map ((minion, index) => {
      if (minion !== 'kevin') {
       let nonCaptializedLetters = minion.slice(1)   // take 1st char of name
        return minion.charAt(0).toUpperCase() + nonCaptializedLetters
      } else {
        return minion}
    })

capitalizedMinions.forEach(capitalizedMinion => {
  console.log(`${capitalizedMinion} is here`)
});

console.log()  
console.log("*** filtered Minions *** - Expected Output")
//  make a an array of only Minions with their first Name capitalzied 
//  from the capitalizedMinions array using the filtered method
//  then check the array for capitalized letter using the every method

const actuallyCapitalizedMinisons = capitalizedMinions.filter ((minion, index)=> {
    let capitalizedLettersCheck = minion.substring(0, 1).toUpperCase()
        return minion.charAt(0) === capitalizedLettersCheck
    }
);
console.log("*** actually Capitalized Minions ***",actuallyCapitalizedMinisons)


console.log("actually capitalized minions - every:", actuallyCapitalizedMinisons.every ((minion, index) => {
  let capitalizedLettersCheck = minion.substring(0, 1).toUpperCase()
      return minion.charAt(0) === capitalizedLettersCheck
  }
))


//    Bonus Methods
//In order to check whether or not that previous map worked, Gru wants to try using the everymethod instead. So, using every, check whether or not every minion in capitalizedMinionsare actually capitalized.
console.log()
console.log("***  Bonus Methods **** ")

// Create a function called isCapitalized that accepts a minion as an argument
//     and checks whether or not the first letter of the minion's name is 
//     capitalized
// Now using both the every method and the isCapitalizedmethod you just wrote,
//      check whether or not all the capitalizedMinionsare capitalized

console.log("***  Every and Find **** ")
let isCapitalized = (minion) => {
  let capitalizedLettersCheck = minion.substring(0, 1).toUpperCase()
  return minion.charAt(0) === capitalizedLettersCheck
}

// const IsAllFirstLettersACap = capitalizedMinions.every ((minion, index) => {
//   console.log("isallFirst", minion, isCapitalized(minion))
//   return isCapitalized(minion)
//   }
// );

console.log("every minion capitalized?", capitalizedMinions.every ((minion, index) => {
  return isCapitalized(minion)
}));

//  Find
// Great! We filtered out the non-capitalized minion, but while we know it was kevin, Gru didn't know that. So, he wants to find out which minion escaped his map earlier by testing out the findmethod.

// Using find, find which minion is not correctly capitalized in the original capitalizedMinionsarray and save it to a variable called uncapitalizedMinion, then console log it

const uncapitalizedMinion = capitalizedMinions.find ((minion, index) => {
   if (!isCapitalized(minion)) {
    return minion}
}
);
console.log("find uncapitalized minion:", uncapitalizedMinion)

//  findIndex
// Aha! Now that Gru's found out which minion escaped him, he wants to find out what index in the original array he was at so he can fix him up later.

// Using findIndex, find what index kevin is in the original capitalizedMinionsarray

console.log()
console.log("*** Index and Capitalize Kevin **** ")

const uncapitalizedMinionIndex = capitalizedMinions.findIndex ((minion, index) => {
  if (!isCapitalized(minion)) {
   return minion}
}
);

// Now that he's found him, he can just use capitalizedMinions[1]to select kevin and capitalize his name.

const kevinCapitalizedMinisons = ((uncapitalizedMinionIndex) => {
  let nonCaptializedLetters = capitalizedMinions [uncapitalizedMinionIndex].slice(1)   // take 1st char of name
  capitalizedMinions [uncapitalizedMinionIndex] =
  capitalizedMinions [uncapitalizedMinionIndex].charAt(0).toUpperCase() + nonCaptializedLetters
})

kevinCapitalizedMinisons(uncapitalizedMinionIndex)
console.log("Updated capitalized Minions", capitalizedMinions)

//  Once that's done, check again using everywhether or not capitalizedMinionsis all capitalized correctly
console.log("Are all capitalized now?", capitalizedMinions.every ((minion, index) => {
  return isCapitalized(minion)
}));

//  Reduce
// Sweet! Now that that's all sorted, Gru can just have some fun testing out the remaining array methods he wanted to learn, starting with reduce. Out of curiority, he wants to know what the sum of all his minions' name lengths is. Use reduce to find out

// First, using map create a separate array called minionNameLengths that maps out the minions' name lengths

// Expected output:
// Use reduceto sum up the minionNameLengthsarray

// Expected output:
    const minionNameLengths = minions.map ((minion, index) => {
      return minion.length
    })

console.log(minionNameLengths)


console.log("count of letters in all the names:", minionNameLengths.reduce ((acc, minionNameLength, index ) =>  {
  acc += minionNameLength
  return acc
  }))

// some
// Now Gru wants to test out the somemethod, so let's go ahead and do that a few times.

// Check whether or not some of the minion's name lengths are 6 or above. How about 7 or above?
// Lowercase Kevin's name again inside of the capitalizedMinionsarray, then check whether or not some of the minion's names are capitalized using some. How about it any are lowercased?

console.log()
console.log("Some Names >= 6", minions.some((minions, index, arr) =>  {
  return minions.length >= 6
  }))

console.log("Some Names >= 7", minions.some((minions, index, arr) =>  {
  return minions.length >= 7
  }))

  // Lowercase Kevin's name again inside of the capitalizedMinionsarray, then check whether or not some of the minion's names are capitalized using some. How about it any are lowercased?

    const kevinUncapitalizedMinisons = (() => {
      capitalizedMinions [1] = capitalizedMinions [1].toLowerCase()
    })
    
    kevinUncapitalizedMinisons()
    console.log("Kevin back to Lower Case:", capitalizedMinions)

    console.log("Some Names Lower Case", capitalizedMinions.some((capitalizedMinion, index) =>  {
      let capitalizedLettersCheck = capitalizedMinion.substring(0, 1).toUpperCase()
      return capitalizedMinion.charAt(0) !== capitalizedLettersCheck 
      }))

//       sort
// Great, now Gru has had some practice with array methods that require callbacks. Now it's time to do some bad guy stuff. Before he can do so by sending his minions out to do his bidding, he wants to sort them in ascending order of their name lengths. Because why not?

// Use sort to order the minions within the capitalizedMinionsarray by order of name length.
// Hints: you'll need to write your own compareMinionsfunction first to pass in as a callback to sort
// Expected output:



console.log()

function compareMinions () {
  const capitalizedMinionsArray = capitalizedMinions

  capitalizedMinionsArray.sort((a,b) => {
  if(a.length < b.length){
      return -1;
  } else if(a.length > b.length){
      return 1;
  }else {
      return 0;
  }
})
console.log ("Sorted array by name length", capitalizedMinionsArray)
}

compareMinions()

