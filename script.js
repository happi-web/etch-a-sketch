const container = document.querySelector(".container");
const gridBtn = document.querySelector("#grid-size");
const modal = document.getElementById("gridModal");
const closeModal = document.querySelector(".close");
const gridInput = document.getElementById("gridInput");
const submitGridSize = document.getElementById("submitGridSize");
const resetBtn = document.querySelector("#resetGrid");
const eraserBtn = document.querySelector("#eraser-btn");
let isEraserActive = false;

// Toggle eraser mode
eraserBtn.addEventListener("click", () => {
  isEraserActive = !isEraserActive;
  eraserBtn.style.backgroundColor = isEraserActive ? "#d32f2f" : "#f44336";
  eraserBtn.textContent = isEraserActive ? "Eraser: ON" : "Eraser";
});

function createGrid(size) {
  container.innerHTML = ""; // Clear existing grid
  const squareSize = 960 / size; // Calculate square size dynamically

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("inDivs");
    square.style.height = `${squareSize}px`;
    square.style.width = `${squareSize}px`;

    // Add hover functionality
    square.addEventListener("mouseover", () => {
      if (isEraserActive) {
        square.style.backgroundColor = "black"; // Default background
      } else {
        square.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
      }
    });

    container.appendChild(square);
  }
}

// Event listener to show modal
gridBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Event listener to close modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Event listener for submit button
submitGridSize.addEventListener("click", () => {
  const size = parseInt(gridInput.value);
  if (isNaN(size) || size < 1 || size > 200) {
    alert("Please enter a valid number between 1 and 200.");
    return;
  }
  createGrid(size);
  modal.style.display = "none"; // Close the modal
});

// Event listener for reset button
resetBtn.addEventListener("click", () => {
  createGrid(16); // Reset to default size
});

// Initialize the default grid
createGrid(16);
