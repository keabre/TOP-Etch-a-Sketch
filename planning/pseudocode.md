# PSEUDOCODE

## Rough steps through the program lifecycle

- FROM START

- program loads up
- 16 x 16 grid is drawn

Then program is in a state of listening

- If user clicks a white square
    - turn that square black

- If user clicks 'Change Grid' button
    - load prompt
    - user to enter number for squares
    If user presses submit after entering new number
        - generate new grid based on user input
    If user presses cancel
        - keep default/or last generated grid

- TO END

## Pseudocode

### On load up

run the generate grid function for a grid that has 16 squares in the height and width

### Gather DOM Elements

store a container element in a variable called sketchBoard
store the 'Change Grid' button in a variable called changeGridButton

### Define global variables

create variable for amount of sqaures for each side of the grid, called gridSquares

### Clear grid function

while the container element stored in the variable sketchBoard has any children
    remove the container's last child

### Generate grid function

create a variable as a holder for the gridSquares variable to be utilised by the loop in this function, call it 'i'

loop through code that
    creates a div with an id that styles it correctly,
    and then gives each div an mousedown event listener that applies a class to change the white square to black
    append this new div as a child to the sketchBoard container variable
    and then decreases the variable i by 1
    until this variable hits 0
    

### Change square to black after square click

create a class with the styles of the desired look for the square after it has been clicked

### Prompt after button click

add an event listener on the changeGridButton that listens for a click event, of which when it is clicked, it prompts the user to enter a number for the amount of squares for the height and width of the new grid
if the user clicks 'cancel' on the prompt, just return to the previous grid
else if the user clicks submit, then
    store this number in the gridSquares variable,
    run the function to clear the old grid,
    and run the function to generate the new grid
