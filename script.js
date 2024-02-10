
const teplotaF = Number(prompt("Zadejte teplotu ve stupních F"));


const teplotaC = Math.floor((teplotaF- 32)*5/9);

document.body.innerHTML += "<p>"+ " Teplota ve stupních Farenheita: " + teplotaF + "</p>";
document.body.innerHTML += "<p>"+ " Teplota ve stupních Celsia: " + teplotaC + "</p>";
