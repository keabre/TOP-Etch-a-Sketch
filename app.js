// Gather DOM Elements

const sketchBoard = document.querySelector("#sketch-board-container")
const changeGridButton = document.querySelector("#change-grid-button")

// Global variables

const gridSquares = 16

// Clear Grid Function

function clearGrid() {
    while (sketchBoard.firstChild) {
        sketchBoard.removeChild(sketchBoard.lastChild)
    }
}

// Generate Grid Function

function generateGrid() {
    let i = gridSquares  // used as the counter to decrement

    for (i; i > 0; i--) {
        const squareDiv = document.createElement("div")
        squareDiv.setAttribute("class", "square-in-grid")
        squareDiv.addEventListener("mousedown", () => {
            squareDiv.style.backgroundColor = '#000000'
        })
        squareDiv.style.setProperty('--square-div-amount', gridSquares)
        sketchBoard.appendChild(squareDiv)
    }
}

// Prompt after button click

changeGridButton.addEventListener("click", () => {
    const promptUserInput = prompt("Enter a number for the amount of squares for the height and width of your new grid you wish to generate: ")
    if (promptUserInput == null) {  // if user presses 'cancel' on the prompt
        return 
    }
    gridSquares = Number(promptUserInput)  // if user presses 'submit' on the prompt
    clearGrid()
    generateGrid()
})

// Run generateGrid function to load default board

if (!sketchBoard.hasChildNodes()) {
    generateGrid()
}
