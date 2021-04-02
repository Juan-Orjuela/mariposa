// Set the date we're counting down to
var countDownDate = new Date("Apr 26, 2021 7:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="contador"
  //document.getElementById("contador").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  document.getElementById("contador").innerHTML = `<div class="col col-dias">
  <span class="num">${days}</span><span class="tag">DÍAS</span>
</div>
<div class="col col-horas">
  <span class="num">${hours}</span><span class="tag">HORAS</span>
</div>
<div class="col col-minutos">
  <span class="num">${minutes}</span><span class="tag">MINUTOS</span>
</div>
<div class="col col-segundos">
  <span class="num">${seconds}</span><span class="tag">SEGUNDOS</span>
</div>`;
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("contador").innerHTML = "INGRESA AQUÍ";
  }
}, 1000);
