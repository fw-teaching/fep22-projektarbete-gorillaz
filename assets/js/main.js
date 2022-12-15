console.log('main.js init');


/* SIDEBAR */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
  }

function validateForm() {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let age = document.getElementById("age").value;

  if (fname == ""|| lname == "" || age == null ) {
    alert("Please fill in all required fields!");
  }
}
//Age verification
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
//Användarinfo
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
function setCookie(cname, cvalue, exdays) {
    const k = new Date();
    k.setTime(k.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+k.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    const uinfo=cname+"="+cvalue+";"+expires;
    console.log(uinfo);
  }
  
function getCookie(cname) 
{
    let name=cname + "=";
    let kakor = document.cookie.split(";"); //Hämtar alla kakor

    for(let i = 0; i < kakor.length; i++) {
        let c = kakor[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return ""; //< Kod från w3schools ^

  }
function login(){
    let username=prompt("Användarnamn?:","");
    //Sparar även i localstorage (följer videon)
    localStorage.setItem("username",username);
    alert("Hej "+localStorage.getItem("username"));
    let datum=new Date();
    localStorage.setItem("date",datum); 
    localStorage.getItem("date");
    setCookie("username", username, 2);
    getCookie("username");
    checkCookie();

}
function checkCookie(){
    let user=getCookie("username");
    console.log("Användaren heter: "+user);
    if(user=="Antz"){
       alert("Du e Antz");
    }else if(user!="Antz"){
       alert("Du e inte ANtz!");
    }
    console.log(document.cookie);
    console.log(localStorage.getItem("username")+" "+localStorage.getItem("date"))
    //To-Do: visits
}

function usernameGen() {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;

  var username = lname + fname.slice(0,2);

  //pls fix so it prints this under register button
  usrName.innerHTML = "Välkommen, ditt användarnamn är " + username + "!";

}

function addZero(i) {
  if (i < 10) {i = "0" + i}
  return i;
}

setInterval(currentTime, 1000);

function currentTime() {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  let hour = addZero(date.getHours());
  let minute = addZero(date.getMinutes());
  let second = addZero(date.getSeconds());

document.getElementById("clock").innerHTML = day + "." + month + "." + year + " " + "kl." + hour + ":" + minute + ":" + second ;
}


document.getElementById("info").addEventListener("click", handleUserData);

document.getElementById("register").addEventListener("click", usernameGen);
document.getElementById("register").addEventListener("click", validateForm);
document.getElementById("register").addEventListener("click", ageVerification);

document.getElementById("cookieBtn").addEventListener("click", login);

