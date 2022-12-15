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

  if (fname == "" || lname == "" || age == null) {
    alert("Please fill in all required fields!");
  }
}
//Age verification
function ageVerification() {
  let age = document.getElementById("age").value;
  console.log(age)
  if (age <= 17) {
    console.log("Du är liten");
    alert("Du är minderårig och får inte spela!");
  }
  else {
    alert("Välkommen");
  }
}
//Användarinfo
function handleUserData() {
  //var appVer = navigator.appVer;
  // var agent = navigator.userAgent;
  var browser = navigator.appCodeName; //Använder nu fastän det är deprecated. Ger något svar som inte heller är onödigt långt
  var platform = navigator.platform;
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

}
function login() {
  let username = prompt("Användarnamn?:", "");
  //Sparar även i localstorage (följer videon)
  localStorage.setItem("username", username);
  alert("Hej " + localStorage.getItem("username"));
  let datum = new Date();
  localStorage.setItem("date", datum);
  localStorage.getItem("date");
  setCookie("username", username, 2);
  getCookie("username");
  checkCookie();

}
//Funktion för att checka en cookie, i det här faller ska din username vara Antz för att du ska kunna se något speciellt. 
// TO-DO: Utveckla funktionalitet för att se hur många gånger man spelat på sidan (besök eller ggr man spelar spel?)
function checkCookie() {
  let user = getCookie("username");
  console.log("Användaren heter: " + user);
  if (user == "Antz") {
    alert("Du e Antz");
  } else if (user != "Antz") {
    alert("Du e inte ANtz!");
  }
  console.log(document.cookie);
  console.log(localStorage.getItem("username") + " " + localStorage.getItem("date"))
  //To-Do: visits
}

function usernameGen() {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;

  var username = lname + fname.slice(0, 2);

  //pls fix so it prints this under register button
  print.innerHTML = "Välkommen, ditt användarnamn är " + username + "!";

}


document.getElementById("info").addEventListener("click", handleUserData);

document.getElementById("register").addEventListener("click", usernameGen);
document.getElementById("register").addEventListener("click", validateForm);
document.getElementById("register").addEventListener("click", ageVerification);

document.getElementById("cookieBtn").addEventListener("click", login);

