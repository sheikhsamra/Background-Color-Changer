const colors = ["#FF5733", "#33FF57", "#5733FF", "#FF33A1", "#33FFF3", "#FFF333", "#333FFF"];

function changeBackground() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  const selectedColor = colors[randomIndex];
  document.body.style.backgroundColor = selectedColor;
  document.getElementById("color-name").textContent = `Background Color: ${selectedColor}`;
}