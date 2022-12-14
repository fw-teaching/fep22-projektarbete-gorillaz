console.log('main.js init');

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
  }

const products = [
    {name: "dildo", price: 69.90, stock: 100},
    {name: "amongus", price: 1069.90, stock: 45},
    {name: "piss", price: 68, stock: 60}
];

for (let i = 0; i < products.length; i++){
    console.log(`En ${products[i].name} kostar ${products[i].price}€ och det finns ${products[i].stock} stycken kvar av dom`)

    /*document.querySelector("#products").innerHTML += `
        <li onclick="alert('vi har ${products[i].stock} på lager')">
            ${products[i].name}: ${products[i].price}
        </li>`*/
}

let count = 0;
const myTimer = setInterval(function () {
    console.log("Hello", count)
    count++;
}, 1000)

function stopHello() {
    clearInterval(myTimer);
}
