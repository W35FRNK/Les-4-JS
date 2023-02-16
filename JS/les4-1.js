const geboortejaar = prompt ('Wat is uw geboortejaar?');
const meetpunt = 1980;
const message_true = "Ok, boomer.."
const message_false = "Hallo millenial!"

if (parseFloat(geboortejaar) <=  parseFloat(meetpunt)) 
{
    document.getElementById('divResult').innerHTML = message_true;

}
else {
    document.getElementById('divResult').innerHTML = message_false;
}
