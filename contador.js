const accionmariposa = document.getElementById("accionmariposa");
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

//ACCION MARIPOSA

var imagen_escritorio = document.getElementById("canvas_img_escritorio");
var imagen_mobile = document.getElementById("canvas_img_mobile");

function crear_accionmariposa(context, text, x, y, maxWidth, lineHeight, img) {
  context.drawImage(img, 0, 0);
  context.fillStyle = "#ffffff";
  var words = text.split(" ");
  var line = "";

  for (var n = 0; n < words.length; n++) {
    var testLine = line + words[n] + " ";
    var metrics = context.measureText(testLine);
    var testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      context.fillText(line, x, y);
      line = words[n] + " ";
      y += lineHeight;
    } else {
      line = testLine;
    }
  }

  context.fillText(line, x, y);
}

var canvas_escritorio = document.getElementById("canvas_escritorio");
var context_escritorio = canvas_escritorio.getContext("2d");
context_escritorio.font = "24pt Arial";

var canvas_mobile = document.getElementById("canvas_mobile");
var context_mobile = canvas_mobile.getContext("2d");
context_mobile.font = "20pt Arial";

accionmariposa.addEventListener("blur", () => {
  if (accionmariposa.value) {
    //crear_accionmariposa(context, accionmariposa.value, x, y, maxWidth, lineHeight);
    crear_accionmariposa(context_escritorio, accionmariposa.value, 722, 410, 610, 40, imagen_escritorio);
    crear_accionmariposa(context_mobile, accionmariposa.value, 40, 1020, 560, 36, imagen_mobile);
    document.getElementById("caja-descarga").classList.add("mostrar");
  }
});

//Descargar
var btn_descarga_escritorio = document.getElementById("descarga_escritorio");
function descargar_escritorio() {
  var dt = canvas_escritorio.toDataURL("image/jpeg");
  this.href = dt;
}
btn_descarga_escritorio.addEventListener("click", descargar_escritorio, false);

var btn_descarga_mobile = document.getElementById("descarga_mobile");

function descargar_mobile() {
  var dt = canvas_mobile.toDataURL("image/jpeg");
  this.href = dt;
}
btn_descarga_mobile.addEventListener("click", descargar_mobile, false);
