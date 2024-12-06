const container = document.querySelector(".container");
const gridBtn = document.querySelector("#grid-size");
const modal = document.getElementById("gridModal");
const closeModal = document.querySelector(".close");
const gridInput = document.getElementById("gridInput");
const submitGridSize = document.getElementById("submitGridSize");
const resetBtn = document.querySelector("#resetGrid");

function createGrid(size) {
  container.innerHTML = ""; // Clear existing grid
  const squareSize = 960 / size; // Calculate square size dynamically
  
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("inDivs");
    square.style.height = `${squareSize}px`;
    square.style.width = `${squareSize}px`;
    container.appendChild(square);


    // Add hover effect with random colors
    square.addEventListener("mouseover", () => {
      const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
      square.style.backgroundColor = randomColor;
    });
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
    alert("Please enter a valid number between 1 and 100.");
    return;
  }
  createGrid(size);
  modal.style.display = "none"; // Close the modal
});

resetBtn.addEventListener("click", ()=> {
  container.innerHTML = "";
  createGrid(16);
})
createGrid(16);
