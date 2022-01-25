// 1: Get the node with the  main title

console.log(document.querySelector("h1"))
// => <h1>Fruits and veggies</h1>
// ----------------------------------------------

// 2: Get the main title text

console.log(document.querySelector("h1").innerText)

// => Fruits and veggies
// ----------------------------------------------

// 3: Get all the nodes with the fruit items

console.log(document.getElementsByClassName("fruit-item"))

// => HTMLCollection(4) [li.fruit-item, li.fruit-item, li.fruit-item, li.fruit-item]
// ----------------------------------------------

// 4: Get all the veggie items - the text

console.log(document.querySelector(".veggies").innerText)

// Broccoli Celery Potato Spinach
// ----------------------------------------------

// 5: Get the subtitle in the veggies section

console.log(document.querySelector(".list-veggies h2").innerText)

// => Veggies
// ----------------------------------------------

// 6: Add an ID 'fruit-title' to the first subtitle (in the Fruit section)

const h2 = document.querySelector("h2");
h2.setAttribute("Id", "fruit-title")

console.log(h2)

// => fruit-title
// ----------------------------------------------

// 7: Add a class 'best-fruit' to the 1st and the 3rd fruit

const h2Best = Array.from(document.querySelectorAll(".fruit-item"));
h2Best[0].classList.add("best-fruit")
h2Best[2].classList.add("best-fruit")

console.log(h2Best[0])
console.log(h2Best[2])


// => <li class="fruit-item best-fruit">Pear</li>
// => <li class="fruit-item best-fruit">Plum</li>
// ----------------------------------------------

// 8: Remove class 'veggies' from the unordered list of veggies

const newVeggie = document.querySelector(".veggies");
newVeggie.classList.remove("veggies")


console.log(newVeggie)


// => <ul>...</ul>
// ----------------------------------------------

// 9: Add a class 'veggie-love' to all the veggies

const veggieLove = Array.from(document.querySelectorAll(".veggie-item"));
veggieLove.forEach(elem => elem.classList.add("veggie-love"))

console.log(veggieLove)


// => <li class="veggie-item veggie-love">Broccoli</li> ...
// ----------------------------------------------

// 10: Remove class 'veggie-item' from 'spinach'

// ... your code here

// => ... <li class="veggie-love">Spinach</li>