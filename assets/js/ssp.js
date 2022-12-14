/* Exempel på JS-fil för specifik sida (ssp-sidan i det här fallet) */

console.log('ssp.js init'); // För att se att skriptet laddats in

let spelare1, spelare2;
function startaSpelet() {
    console.log("Loading game...")
    spelare1 = prompt("Spelare 1 - Välj sten, sax eller papper")
    spelare2 = prompt("Spelare 2 - Välj sten, sax eller papper")
    spelare1 = spelare1.toLowerCase();
    spelare2 = spelare2.toLowerCase();
    console.log("Spelare 1 valde " + spelare1)
    console.log("Spelare 2 valde " + spelare2)
    vemVann(spelare1, spelare2);
}

function vemVann(p1, p2)//case sensitive, hence lowercase ^
{
    if (p1 == p2) {
        alert("Jämnt spel.");
    }
    else if (p1 == "sten") {
        console.log("Spelare 1 har valt sten - hur kan hen vinna?");
        if (p2 == "sax") {
            alert("Spelare 1 vann.")
        } else if (p2 == "papper") {
            alert("Spelare 2 vann.")
        }
    }
    else if (p1 == "sax") {
        console.log("Spelare 1 har valt sax - hur kan hen vinna?")
        if (p2 == "papper") {
            alert("Spelare 1 vann.")
        } else if (p2 == "sten") {
            alert("Spelare 2 vann.")
        }
    } else if (p1 == "papper") {
        console.log("Spelare 1 har valt papper - hur kan hen vinna?")
        if (p2 == "sten") {
            alert("Spelare 1 vann.")
        } else if (p2 == "sax") {
            alert("Spelare 2 vann.")
        }
    }
}

document.getElementById("playbutton").addEventListener("click", startaSpelet);