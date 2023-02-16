var teller = 10,
getal = 10;
while ( teller >= 1 ) {
  document.getElementById('divResult').innerHTML +=
  teller + ' maal ' + getal + ' = ' + teller * getal + '<br/>';
  teller--;
}