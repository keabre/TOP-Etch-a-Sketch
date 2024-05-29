# Project Plan

## Guidance steps provided by The Odin Project

1. Create a webpage with a 16x16 grid of square divs

2. Set up a 'hover' effect so that the grid divs change colour when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would

3. Add a button on the top of the screen that will send the user a popup asking for the number of squares per side for the new grid, Once entered, the existing grid should be removed, and a new grid should be generated in the same total space as before so that you've got a new sketch pad

## My rewording of the project for adhanced understanding

Create an Etch-a-Sketch project with an embedded section acting as the board to 'sketch' on along with a button above it that allows the user the enter how many squares per side they want the grid to be through a popup, if they want more or less than what's provided by default.

The default board will consist of 16 squares each way.

The user generated board should take the same amount of pixel space as the default board, just with bigger or smaller squares

The Sketching board will simulate sketch through the squares changing colour when their mouse hovers over it 

(I'm assuming it is up to me whether I want it to be a mouseover event or a mousedown event)

## The Plan

### Questions to ask myself

1. If the program has a user interface, what will it look like and how will it's interactivity function?

2. What inputs will your program have and how will they come about? 

3. What will be the desired outputs of the program?

4. What are the steps necessary between my inputs and returning the desired outputs?

### Answers

1. User interface a functionality

The program will have a user interface:

- a large box located in the bottom half of the client screen containing grids of transparent borders, by default 16x16 squares large and by further user definition, any amount they specify. 

- above the large box, on the top half of the client box, a title saying 'Etch-a-Sketch' at the top of the screen with a little space at the top. Under this title, will be a button saying 'Change Grid'. It will be a large button taking half of the space of the top have of the screen.

- everything in this project will be spaced evenly and centered horizontally in the client screen

- a soft gray colour will fill the rest of the screen that isn't filled by the elements on it.

- a standard browser styled popup for when the user clicks the button to change the amount of squares in the board

The program will have the following functionalities:

- the large box's squares will be controlled by the user, they can press the button and the amount of squares per side of the box will be in their control to specify

- when the user clicks and holds their mouse over the etch-a-sketch board, the squares pressed down on will change colour to black from white

2. Inputs and where will they come from

The inputs expected from the user will be:

- clicking on the button to request a screen size changer popup

- entering their desired amount of squares for the width and height of the grid

- clicking on the board to change a grid square from white to black

The inputs expected from the program will be:

- the initial size of the board which will be 16 squares in width and 16 squares in height

3. Desired outputs of the program

- the squares turning black after user presses down over the square

- the amount of squares per grid after the user submits the desired square amount for the width and height of the grid (the grid entirely changing to a new one)

- giving the user a prompt to fill out through the popup

4. Steps that link inputs to outputs

- user clicks a square on the board, through an event listener and the mousedown event, identify which square (div) that was clicked by using that event object in the event listener appended to every div element representing a square on the board. Fill the background colour to black through JavaScript and a predefined class in CSS with the 'background-color' property set to the value 'black'

- user clicks on the 'Change Grid' button using an event listener and the click event, then a prompt is provided, it displays a text field and a submit button, after filling out the text field and then pressing the submit button. The current grid is removed from the DOM using a loop which checks if a container has a child, and if it does, remove it's lastChild, until there aren't any children to that container anymore. Then a new generated grid is put in its place using a Javascript loop creating a new element looping x amount of times and setting an id for the correct styles to be applied, where x is the number the user entered in the prompt. The squares will fill the fixed sized board using CSS Flexbox, letting each div wrap, grow and/or shrink if needed.

- the input of loading up the screen, will cause a 16 square by 16 square grid to be generated using JavaScript through a loop creating each square through DOM manipulation (createElement) and setting an id for the correct styles to be applied. The squares will fill the fixed sized board using CSS Flexbox, letting each div wrap, grow and/or shrink if needed.