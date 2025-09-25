//your JS code here. If required.
 const container = document.getElementById("container");
    const colors = ["#e74c3c", "#8e44ad", "#3498db", "#27ae60", "#f39c12", "#d35400", "#1abc9c", "#9b59b6"];

    for (let i = 0; i < 800; i++) {
      const square = document.createElement("div");
      square.classList.add("square");

      square.addEventListener("mouseover", () => setColor(square));
      square.addEventListener("mouseleave", () => removeColor(square));

      container.appendChild(square);
    }

    function setColor(element) {
      const color = getRandomColor();
      element.style.backgroundColor = color;
    }

    function removeColor(element) {
      setTimeout(() => {
        element.style.backgroundColor = "#1d1d1d";
      }, 1000); // reset after 1s
    }

    function getRandomColor() {
      return colors[Math.floor(Math.random() * colors.length)];
    }
