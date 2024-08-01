Documentation still in progress.

Before consuming this Read Me, please consider: 

- I admit that some time working in documentation writing might be necessary;
- There are a few sleeps in my code, I'll be the first to point at them (if I spot it first);
- I really took to consideration the "IDEALLY Vanilla JS!" part of the test description;
- I did not stressed about directory management and folder architechture as this is set to be more of a display of coding skilss;
- This is a PHP code for Heroku
- Thank you for reading so far!


------------ Folder Structure

    . ---/frontEndHelpJuice
    . ---------/index.php
    . ---------/index.js
    . ---------/index.css
    . ---------/index.html
    . ---------/Icons
    . ---------------/arrowDown.svg
    . ---------------/book.svg
    . ---------------/burguerMenu.svg
    . ---------------/checked.svg
    . ---------------/chevronDoubleRight.svg
    . ---------------/chevronDown.svg
    . ---------------/clock.svg
    . ---------------/lockOpen.svg
    . ---------------/menu.svg
    . ---------------/question.svg
    . ---------------/t.svg
    . ---------------/userIcon.svg


------------ Javascript (index.js)

  functions that might deserve some explanation on service/execution:
  - resizeInput() is used to automatically adjust the height of a block as the user types more than one line.
    
  - displayMenu() will toggle the visualization and adjust position of the block options menu.
    
  - updateBlockOptionNavigation() is designed to command the enter and arrows (up and down) selection inside the open block options menu.
    
  - updateBlocks() is responsible for creating a new instance of the current blocks in display and setting to each element the respective trigger and logic of execution.



------------- HTML/CSS 

  Points of interest aboutt the HTML/CSS:
  - The block options modal is set in the HTML file and through class, style and DOM manypulation, it is displayed.
  - The first Header ("Front-end developer test project") was set as an Input because I intended on synchronizing it to the navigation item at the top of the page. Did not deploy this feature but kept it as an input.
  - I followed a few best practices of SEO such as semantic tags and alternative texts for images.
  - In the CSS department I chose to avoid excessive use of classes and IDs, keeping a style sheet easy to read and edit.

