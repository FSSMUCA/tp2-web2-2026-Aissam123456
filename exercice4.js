let compteur = 0

// 1
let a1 = 0, b1 = ""
console.log('0 == ""         -> ' + (a1 == b1) + '    |   0 === ""         -> ' + (a1 === b1))
if ((a1 == b1) && !(a1 === b1)) compteur++

// 2
let a2 = 0, b2 = "0"
console.log('0 == "0"        -> ' + (a2 == b2) + '    |   0 === "0"        -> ' + (a2 === b2))
if ((a2 == b2) && !(a2 === b2)) compteur++

// 3
let a3 = 0, b3 = false
console.log('0 == false      -> ' + (a3 == b3) + '    |   0 === false      -> ' + (a3 === b3))
if ((a3 == b3) && !(a3 === b3)) compteur++

// 4
let a4 = "", b4 = false
console.log('"" == false     -> ' + (a4 == b4) + '    |   "" === false     -> ' + (a4 === b4))
if ((a4 == b4) && !(a4 === b4)) compteur++

// 5
let a5 = null, b5 = undefined
console.log('null == undefined -> ' + (a5 == b5) + '    |   null === undefined -> ' + (a5 === b5))
if ((a5 == b5) && !(a5 === b5)) compteur++

// 6
let a6 = null, b6 = false
console.log('null == false   -> ' + (a6 == b6) + '    |   null === false   -> ' + (a6 === b6))
if ((a6 == b6) && !(a6 === b6)) compteur++

// 7
let a7 = NaN, b7 = NaN
console.log('NaN == NaN      -> ' + (a7 == b7) + '    |   NaN === NaN      -> ' + (a7 === b7))
if ((a7 == b7) && !(a7 === b7)) compteur++

// 8
let a8 = 1, b8 = "1"
console.log('1 == "1"        -> ' + (a8 == b8) + '    |   1 === "1"        -> ' + (a8 === b8))
if ((a8 == b8) && !(a8 === b8)) compteur++

// 9
let a9 = " \t\n ", b9 = 0
console.log('" \\t\\n " == 0  -> ' + (a9 == b9) + '    |   " \\t\\n " === 0  -> ' + (a9 === b9))
if ((a9 == b9) && !(a9 === b9)) compteur++

console.log("---")
console.log(compteur + " paire(s) où == et === donnent des résultats différents")