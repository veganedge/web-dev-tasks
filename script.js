/* start of adding categories (left menu) */

var buttonCategory = document.getElementById("addCategory");
var inputCategory = document.getElementById("inputCategory");
var itemCategory = document.createElement("li");
var listCategory = document.getElementById("navigation");


/* calculates if there is user input */
function inputCategoryLength() {
    return inputCategory.value.length;
}

/* adds user input category to the left menu */
function createLiElement() {
    /* creates text for an li element */
    itemCategory.appendChild(document.createTextNode(inputCategory.value));
    /* attaches li element to end of ul element */
    listCategory.appendChild(itemCategory);
    /* clears user input */
    inputCategory.value = "";
}

/* if no user input, then no action */
function addCategoryAfterClick() {
    if (inputCategoryLength() > 0) {
        createLiElement();
    }
}

/* same as above, but if user presses enter instead of clicking button */
function addCategoryAfterKeypress(event) {
    if (inputCategoryLength() > 0 && event.keyCode === 13) {
        createLiElement();
    }
}

buttonCategory.addEventListener("click", addCategoryAfterClick)
inputCategory.addEventListener("keypress", addCategoryAfterKeypress)

/*  1. still need to also have it add checkbox input, label, anchor tag, h3, and stylized the same way as the rest */
/*      -I believe I need to make the itemCategory "h3" instead of "li", then append that as a child of the "a", append THAT as a child of the "label", append THAT as a child of the "input", append that as a child of the "li"
/*  2. need to fix so it's going on a new level each time, if you add multiple - probably something to do with a for loop */
/*  3. need to make it show the new category on right menu with an input and button to add tasks to it */
/*  4. want to make it so when you mark off the category, it checks all the task boxes of that category (in effect marking every task done) */
/*      -ROUGH IDEA - would need to figure out how to select probably using a for loop again, or have to make a different class name for each category/task button, then somehow make it make a new function for select all when a user inputs a new category  

var checkboxCategory = document.getElementsByClassName("checkboxCategory")
var checkboxTask = document.getElementsByClassName("checkboxTask")

function selectAllChildCheckboxes() {
    if (checkboxCategory = "selected") {
        checkboxTask = "selected"
    }
}

checkboxCategory.addEventListener("click", selectAllChildCheckboxes)
*/
 


/* end of adding categories (left menu)*/





/* start of adding tasks (right menu) */

var buttonTask = document.getElementById("addTask");
var inputTask = document.getElementById("inputTask");
var itemTask = document.createElement("li");
var listTask = document.getElementById("udemyCourse");


/* calculates if there is user input */
function inputTaskLength() {
    return inputTask.value.length;
}

/* adds user input task to the category */
function createListElement() {
    /* creates text for an li element */
    itemTask.appendChild(document.createTextNode(inputTask.value));
    /* attaches li element to end of ul element */
    listTask.appendChild(itemTask);
    /* clears user input */
    inputTask.value = "";
}

/* if no user input, then no action */
function addTaskAfterClick() {
    if (inputTaskLength() > 0) {
        createListElement();
    }
}
/* same as above, but if user presses enter instead of clicking button */
function addTaskAfterKeypress(event) {
    if (inputTaskLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

/*  1. still need to also have it add checkbox input, label, anchor tag, h3, and stylized the same way as the rest */
/*      -I believe I need to make the itemCategory "h3" instead of "li", then append that as a child of the "a", append THAT as a child of the "label", append THAT as a child of the "input", append that as a child of the "li"
/*  2. need to fix so it's going on a new level each time, if you add multiple - probably something to do with a for loop */
/*  3. need to make it show the new category on right menu with an input and button to add tasks to it */


buttonTask.addEventListener("click", addTaskAfterClick)
inputTask.addEventListener("keypress", addTaskAfterKeypress)

/* end of adding tasks (right menu) */



/* more ideas */
// when marking category as done, it marks all items in that category as done
// ultimately have it remember the user and changes, so when re-visited it is up to date.
