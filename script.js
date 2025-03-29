addEventListener("mousemove", (event) => {
  let x_value = document.getElementById("x-cordinate");
  let y_value = document.getElementById("y-cordinate");
  let x_cordinate = event.offsetX;
  let y_cordinate = event.offsetY;

  x_value.textContent = x_cordinate;
  y_value.textContent = y_cordinate;
  localStorage.setItem("x_cordinate", x_cordinate);
  localStorage.setItem("y_cordinate", y_cordinate);
});
