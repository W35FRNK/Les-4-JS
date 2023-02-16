//Opdracht 4a
// for (i = 8; i > 0; i--){  
//   document.write(i + '<br>');
// }

var teller = 8, getal = 1;
while ( teller >= 1 ) {
  document.getElementById('divResultA').innerHTML +=
  teller + ' maal ' + getal + ' = ' + teller * getal + '<br/>';teller--;
}




//Opdracht 4b
// for (i = 1; i <= 99; i = i*2){  
//   i /= 1.5;
//   document.write(i + '<br>');
// }

var i = 1;
while (i <= 99) {
  i /= 1.5;
  document.getElementById('divResultB').innerHTML += (i + '<br>');
  i *= 2
}
  



//Opdracht 4c
// for (var nummer = 0; nummer <=100; nummer++){
//   if (nummer === 77){     document.write(nummer + '<br>');
//        break;
//     }
//   }

var i = 0;
while (i <= 100) {
  if (i === 77){
      document.getElementById('divResultC').innerHTML = i + '<br>';
  }
i++;
}