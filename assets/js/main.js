console.log('main.js init');


/* SIDEBAR */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
  }


function ageVerification(){
  let age = document.getElementById("age").value;
  console.log(age)
  if (age<=17){
    console.log("Du är liten");
    alert("Du är minderårig och får inte spela!");
  }
  else
  {
    alert("Välkommen");
  }
}
function handleUserData() {
    var print = document.getElementById("gibData");
    var appVer = navigator.appVer;
    var agent = navigator.userAgent;
    var browserName = navigator.browserName;
    var width = screen.width * window.devicePixelRatio;
    var height = screen.height * window.devicePixelRatio;
    var ip = location.host;
    //var windowHeight = window.screen.height;
    //var windowWidth = window.screen.width;
    //Print allt i konsol o inte på sidan!
   // print.innerHTML = "App version= " + appVer + "<br>" + "Agent= " + agent + "<br>" + "Browser name= " + browserName + "<br>" + "Screen resolution= " + width + "x" + height + "<br>"+"IP adress= "+ip+"<br>";
    console.log(appVer + agent + browserName);
   
    //Funkar men skriver över hela sidan tillsvidare Update: Behövdes ba att man tar något id länkat till text i html o satt .innerHTML 
    //Experimentera med else if satser här för att få det att funka så att det kan fråga pånytt, åtminstone tills man tillåter
    getLocation();
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(showPosition);
        } else {
            geoInfo.innerHTML = "Error: Var vänlig och tillåt platstjänster :)";
            window.alert("Error: Var vänlig och tillåt platstjänster :)");
            console.log("Error: Var vänlig och tillåt platstjänster :)");
        } //Funkar med allow men inte med block????
    }
    function showPosition(position) {
        var geoInfo = document.getElementById("geoInfo");
        geoInfo.innerHTML = "Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude;
    }
}
document.getElementById("info").addEventListener("click", handleUserData);
document.getElementById("submit").addEventListener("click", ageVerification);
