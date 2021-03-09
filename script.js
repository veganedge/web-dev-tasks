/* start of adding categories (left menu) */

var buttonCategory = document.getElementById("addCategory");
var inputCategory = document.getElementById("inputCategory");
var listCategory = document.getElementById("navigation");


/* calculates if there is user input */
function inputCategoryLength() {
    return inputCategory.value.length;
}

/* adds user input category to the left menu */
function createItemCategory() {
    var itemCategory = document.createElement("li");
    itemCategory.appendChild(document.createTextNode(inputCategory.value));
    listCategory.appendChild(itemCategory);
    inputCategory.value = "";
    return itemCategory;
}

/* adds checkbox to newly created input category */
function createCheckboxCategory(itemCategory) {
    var chkbx = document.createElement("input");
    chkbx.setAttribute("type", "checkbox");
    chkbx.appendChild(document.createTextNode(""));
    itemCategory.appendChild(chkbx);
    }

/* runs the above functions on clicking button */
function addCategoryAfterClick() {
    if (inputCategoryLength() > 0) {
      var newItemCategory = createItemCategory();
      createCheckboxCategory(newItemCategory);
    }
}

/* same as above, but when pressing enter instead of clicking button */
function addCategoryAfterKeypress(event) {
    if (event.keyCode === 13) {
        addCategoryAfterClick();
    }
}

buttonCategory.addEventListener("click", addCategoryAfterClick)
inputCategory.addEventListener("keypress", addCategoryAfterKeypress)

/*  1. still need to also have it add label, anchor tag, h3, and stylized the same way as the rest */
/*      -I believe I need to make the itemCategory "h3" instead of "li", then append that as a child of the "a", append THAT as a child of the "label", append THAT as a child of the "input", append that as a child of the "li"
/*  2. need to make it show the new category on right menu with an input and button to add tasks to it */
/*  3. want to make it so when you mark off the category, it checks all the task boxes of that category (in effect marking every task done) */
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
var listTask = document.getElementById("udemyCourse");


/* calculates if there is user input */
function inputTaskLength() {
    return inputTask.value.length;
}

/* adds user input task to the category */
function createItemTask() {
    var itemTask = document.createElement("li");
    itemTask.appendChild(document.createTextNode(inputTask.value));
    listTask.appendChild(itemTask);
    inputTask.value = "";
    return itemTask;
}

/* adds checkbox to newly created input category */
function createCheckboxTask(itemTask) {
    var chkbx2 = document.createElement("input");
    chkbx2.setAttribute("type", "checkbox");
    chkbx2.appendChild(document.createTextNode(""));
    itemTask.appendChild(chkbx2);
    }

/* if no user input, then no action */
function addTaskAfterClick() {
    if (inputTaskLength() > 0) {
        var newItemTask = createItemTask();
        createCheckboxTask(newItemTask);
    }
}

/* same as above, but if user presses enter instead of clicking button */
function addTaskAfterKeypress(event) {
    if (event.keyCode === 13) {
        addTaskAfterClick();
    }
}

/*  1. still need to also have it add label, anchor tag, h3, and stylized the same way as the rest */
/*      -I believe I need to make the itemCategory "h3" instead of "li", then append that as a child of the "a", append THAT as a child of the "label", append THAT as a child of the "input", append that as a child of the "li" */


buttonTask.addEventListener("click", addTaskAfterClick)
inputTask.addEventListener("keypress", addTaskAfterKeypress)

/* end of adding tasks (right menu) */



/* more ideas *// ultimately have it remember the user and changes, so when re-visited it is up to date.
