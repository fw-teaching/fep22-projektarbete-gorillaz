console.log('main.js init');
checkCookie(); //Tills vidare on load ifall de behövs
visitCounter(); //localStorage

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

  if (fname == "" || lname == "" || age == null) {
    alert("Please fill in all required fields!");
  }
}
//Age verification
function ageVerification() {
  let age = document.getElementById("age").value;
  if (age <= 17) {
    console.log("Du är liten");
    alert("Du är minderårig och får inte spela!");
    window.location.reload(true);
  }
  else {
    console.log("Passed age verification.");
    usernameGen();
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("age").value = "";
    document.getElementById("money").value = "";
  }
}

//Användarinfo, så mycke deprecated att de blir inte riktigt rätt...
function handleUserData() {
  //var appVer = navigator.appVer;
  // var agent = navigator.userAgent;
  var browser = navigator.appCodeName; //Använder nu fastän det är deprecated. Ger något svar som inte heller är onödigt långt
  var platform = navigator.platform; //Fel svar...
  var language = navigator.language;
  var width = screen.width; //* window.devicePixelRatio;
  var height = screen.height; //* window.devicePixelRatio;
  //Print allt i konsol o inte på sidan!
  console.log("Platform: " + platform + " Language: " + language + " Browser: " + browser + " Resolution: " + width + "x" + height + " Inner window size: " + window.innerWidth + "x" + window.innerHeight);


  //Experimentera med else if satser här för att få det att funka så att det kan fråga pånytt, åtminstone tills man tillåter
  getLocation();
  function getLocation() {
    if (navigator.geolocation=true) {
      navigator.geolocation.watchPosition(showPosition);
    } else if(navigator.geolocation=false) {
      window.alert("Error: Var vänlig och tillåt platstjänster :)");
      console.log("Error: Var vänlig och tillåt platstjänster :)");
    } //Funkar med allow men inte med block????
  }
  function showPosition(position) {
    console.log("Latitude: " + position.coords.latitude +
      "  Longitude: " + position.coords.longitude);
  }
}
function setCookie(cname, cvalue, exdays) {
  const k = new Date();
  k.setTime(k.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + k.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  const uinfo = cname + "=" + cvalue + ";" + expires;
  console.log(uinfo);
}

function getCookie(cname) {
  let name = cname + "=";
  let kakor = document.cookie.split(";"); //Hämtar alla kakor

  for (let i = 0; i < kakor.length; i++) {
    let c = kakor[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return ""; //< Kod från w3schools ^

}/*
function login() {//Få ihop med usernameGen
 
  //Sparar även i localstorage (följer videon)
  localStorage.setItem("username", username);
  console.log("Hej " + localStorage.getItem("username"));
  let datum = new Date();
  localStorage.setItem("date", datum);
  localStorage.getItem("date");
  setCookie("username", username, 2);
  getCookie("username");
  checkCookie();

}*/
//Funktion för att checka en cookie, i det här faller ska din username vara Antz för att du ska kunna se något speciellt. 
// TO-DO: Utveckla funktionalitet för att se hur många gånger man spelat på sidan (besök eller ggr man spelar spel?)
function checkCookie() {
  let user = getCookie("username");
  console.log("Användaren heter: " + user);
  if (user == "DoepelAn") {
    console.log("Du e Antz");
  } else if (user != "DoepelAn") {
    console.log("Du e inte Antz!");
  }
  console.log(document.cookie);
  console.log(localStorage.getItem("username") + " " + localStorage.getItem("date"))
  //To-Do: visits
}
function visitCounter(){
var visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
 }
 console.log(visitCount);
}

function usernameGen() {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;

  var username = lname + fname.slice(0, 2);

  localStorage.setItem("username", username);
  console.log("Hej " + localStorage.getItem("username"));
  let datum = new Date();
  localStorage.setItem("date", datum);
  localStorage.getItem("date");
  setCookie("username", username, 7);
  getCookie("username");
  checkCookie();

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

//document.getElementById("register").addEventListener("click", usernameGen);
document.getElementById("register").addEventListener("click", validateForm);
document.getElementById("register").addEventListener("click", ageVerification);


