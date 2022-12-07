console.log('main.js init');

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
/* Kommenterar bort för det är ett helvete att följa med console xd
let count = 0;
const myTimer = setInterval(function () {
    console.log("Hello", count)
    count++;
}, 1000)

function stopHello() {
    clearInterval(myTimer);
}*/
function handleUserData() {
    var print = document.getElementById("gibData");
    var appVer = navigator.appVersion;
    var agent = navigator.userAgent;
    var browserName = navigator.appName;
    var width = screen.width * window.devicePixelRatio;
    var height = screen.height * window.devicePixelRatio;
    var ip = location.hostname;
    //var windowHeight = window.screen.height;
    //var windowWidth = window.screen.width;

    print.innerHTML = "App version= " + appVer + "<br>" + "Agent= " + agent + "<br>" + "Browser name= " + browserName + "<br>" + "Screen resolution= " + width + "x" + height + "<br>"+"IP adress= "+ip+"<br>";
    console.log(appVer + agent + browserName);
    //Funkar men skriver över hela sidan tillsvidare Update: Behövdes ba att man tar något id länkat till text i html o satt .innerHTML
    getLocation();
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(showPosition);
        } else {
            geoInfo.innerHTML = "Error: Var vänlig och tillåt platstjänster :)";
            window.alert("Error: Var vänlig och tillåt platstjänster :)");
            console.log("Error: Var vänlig och tillåt platstjänster :)")
        } //Funkar med allow men inte med block????
    }
    function showPosition(position) {
        var geoInfo = document.getElementById("geoInfo");
        geoInfo.innerHTML = "Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude;
    }
}

document.getElementById("Info").addEventListener("click", handleUserData);