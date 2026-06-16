//This is the repulsion code

function drawRepulsion(canvasId, particle, x) {

  let canvas = document.getElementById(canvasId);
  let context = canvas.getContext("2d");

  let width = canvas.width;
  let height = canvas.height;
  let radius = canvas.width / 10;

  context.clearRect(0, 0, width, height);

  context.font = (width / 6) + "px Arial";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.strokeStyle = "black";

  let color;
  let symbol;

  if (particle == "proton") {
    color = "blue";
    symbol = "+";
  } else {
    color = "yellow";
    symbol = "-";
  }

  // left particle
  context.beginPath();
  context.fillStyle = color;
  context.arc(width / 2 + 2 * radius - x, height / 2, radius, 0, 2 * Math.PI);
  context.fill();
  context.stroke();

  context.fillStyle = "white";
  context.fillText(symbol, width / 2 + 2 * radius - x, height / 2);

  // right particle
  context.beginPath();
  context.fillStyle = color;
  context.arc(width / 2 - 2 * radius + x, height / 2, radius, 0, 2 * Math.PI);
  context.fill();
  context.stroke();

  context.fillStyle = "white";
  context.fillText(symbol, width / 2 - 2 * radius + x, height / 2);
}

function animateRepulsion(canvasId, particle) {

  let x = 0;

  function animate() {

    x = x + 0.8;

    if (x > 100) {
      x = 0;
    }

    drawRepulsion(canvasId, particle, x);

    requestAnimationFrame(animate);
  }

  animate();
}


//This is the attraction code

function drawAttraction(canvasId, x) {

  let canvas = document.getElementById(canvasId);
  let context = canvas.getContext("2d");

  let width = canvas.width;
  let height = canvas.height;
  let radius = canvas.width / 10;

  context.clearRect(0, 0, width, height);

  context.font = (width / 6) + "px Arial";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.strokeStyle = "black";

  // proton
  context.beginPath();
  context.fillStyle = "blue";
  context.arc(width / 5 + x, height / 2, radius, 0, 2 * Math.PI);
  context.fill();
  context.stroke();

  context.fillStyle = "white";
  context.fillText("+", width / 5 + x, height / 2);

  // electron
  context.beginPath();
  context.fillStyle = "yellow";
  context.arc(4 * width / 5 - x, height / 2, radius, 0, 2 * Math.PI);
  context.fill();
  context.stroke();

  context.fillStyle = "white";
  context.fillText("-", 4 * width / 5 - x, height / 2);
}

function animateAttraction(canvasId) {

  let x = 0;

  function animate() {

    x = x + 0.8;

    if (x > 90) {
      x = 0;
    }

    drawAttraction(canvasId, x);

    requestAnimationFrame(animate);
  }

  animate();
}

function canStartAnimations() {

  let a = document.getElementById("Attraction");
  let e = document.getElementById("electronRepulsion");
  let p = document.getElementById("protonRepulsion");

  return a && e && p;
}

function startAnimationsIfReady() {

  if (!canStartAnimations()) {
    return;
  }

  animateAttraction("Attraction");
  animateRepulsion("electronRepulsion", "electron");
  animateRepulsion("protonRepulsion", "proton");
}