function valasztas(){
    kepvalasztas = fenykep.value
    document.querySelector("#kep1").style.backgroundImage = "url('"+kepvalasztas+"')"
}


// Set the date we're counting down to
var countDownDate = new Date("Sep 12, 2023 20:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = now - countDownDate;

  // Time calculations for days, hours, minutes and seconds
  var years = Math.floor(distance / (1000 * 60 * 60 * 24) / 365);
  var days = Math.floor(distance / (1000 * 60 * 60 * 24)) % 365;
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = years + "y " + days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


function fannigomb(){
    document.getElementById("fannikepek").style.display = 'block'
    document.getElementById("kozoskepek").style.display = 'none'

}

function kozosgomb(){
    document.getElementById("kozoskepek").style.display = 'block'
    document.getElementById("fannikepek").style.display = 'none'

}