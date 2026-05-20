const matrix = document.getElementById("matrix");

const chars =
"01アイウエオカキクケコサシスセソABCDEFGHIJKLMNOPQRSTUVWXYZ";

for(let i = 0; i < 140; i++){

  const span = document.createElement("span");

  span.innerText =
  chars[Math.floor(Math.random() * chars.length)];

  span.style.left =
  Math.random() * 100 + "vw";

  span.style.animationDuration =
  (Math.random() * 5 + 5) + "s";

  span.style.fontSize =
  (Math.random() * 12 + 10) + "px";

  span.style.opacity =
  Math.random();

  span.style.animationDelay =
  Math.random() * 5 + "s";

  matrix.appendChild(span);
}