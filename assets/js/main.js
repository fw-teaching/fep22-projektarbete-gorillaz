console.log('main.js init');

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
  }

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