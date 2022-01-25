
console.log("Js loaded")

console.log(
    document.querySelector("div.first-div").innerText,
    "\n",
    document.querySelector("div.first-div + div").innerText
)

const firstDiv = Array.from(document.getElementsByClassName("first-div"))
console.log("First Div: ", firstDiv.length)

firstDiv.forEach(console.log)

const divs =  Array.from(document.querySelectorAll("div"))
divs.forEach(console.log)

const secondDiv = document.getElementById("second-div")
console.log("SecondDiv: ", secondDiv)


// -------- Test for Equality -------

const cards = Array.from(document.getElementsByClassName("card"))

console.log(
    divs[0] === cards[0]
)

cards.forEach(card=>card.innerText += "and I have been modified")

// --------- selecting on a branch (element inside document) ---------

// document.getElementsByTagName("div")[0].querySelector("p")
// is the same as typing:
//console.log("chain"div[0].querySelector("p"))