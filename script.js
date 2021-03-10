/* start of adding categories (left menu) */

const buttonCategory = document.getElementById("addCategory");
const inputCategory = document.getElementById("inputCategory");
const listCategory = document.getElementById("navigation");


/* calculates if there is user input */
const inputCategoryLength = () => inputCategory.value.length;

/* adds user input category to the left menu */
function createItemCategory() {
    const itemCategory = document.createElement("li");
    itemCategory.appendChild(document.createTextNode(inputCategory.value));
    listCategory.appendChild(itemCategory);
    inputCategory.value = "";
    return itemCategory;
}

/* adds checkbox to newly created input category */
function createCheckboxCategory(itemCategory) {
    const chkbx = document.createElement("input");
    chkbx.setAttribute("type", "checkbox");
    chkbx.appendChild(document.createTextNode(""));
    itemCategory.appendChild(chkbx);
    }

/* runs the above functions on clicking button */
function addCategoryAfterClick() {
    if (inputCategoryLength() > 0) {
      const newItemCategory = createItemCategory();
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

/*===============================================================
/*  1. still need to also have it add label, anchor tag, h3, and stylized the same way as the rest */
/*      -I believe I need to make the itemCategory "h3" instead of "li", then append that as a child of the "a", append THAT as a child of the "label", append THAT as a child of the "input", append that as a child of the "li"
/*  2. need to make it show the new category on right menu with an input and button to add tasks to it */
/*  3. want to make it so when you mark off the category, it checks all the task boxes of that category (in effect marking every task done) */
/*      -ROUGH IDEA - would need to figure out how to select probably using FOR LOOP again, or have to make a different class name for each category/task button, then somehow make it make a new function for select all when a user inputs a new category  
/*===============================================================

const checkboxCategory = document.getElementsByClassName("checkboxCategory")
const checkboxTask = document.getElementsByClassName("checkboxTask")

function selectCategoryChildCheckboxes() {
    if (checkboxCategory = "selected") {
        checkboxTask = "selected";
    }
}

checkboxCategory.addEventListener("click", selectCategoryChildCheckboxes)

*/
 


/* end of adding categories (left menu)*/





/* start of adding tasks (right menu) */

const buttonTask = document.getElementById("addTask");
const inputTask = document.getElementById("inputTask");
const listTask = document.getElementById("udemyCourse");


/* calculates if there is user input */
const inputTaskLength = () => inputTask.value.length;

/* adds user input task to the category */
function createItemTask() {
    const itemTask = document.createElement("li");
    itemTask.appendChild(document.createTextNode(inputTask.value));
    listTask.appendChild(itemTask);
    inputTask.value = "";
    return itemTask;
}

/* adds checkbox to newly created input category */
function createCheckboxTask(itemTask) {
    const chkbx2 = document.createElement("input");
    chkbx2.setAttribute("type", "checkbox");
    chkbx2.appendChild(document.createTextNode(""));
    itemTask.appendChild(chkbx2);
    }

/* if no user input, then no action */
function addTaskAfterClick() {
    if (inputTaskLength() > 0) {
        const newItemTask = createItemTask();
        createCheckboxTask(newItemTask);
    }
}

/* same as above, but if user presses enter instead of clicking button */
function addTaskAfterKeypress(event) {
    if (event.keyCode === 13) {
        addTaskAfterClick();
    }
}

buttonTask.addEventListener("click", addTaskAfterClick)
inputTask.addEventListener("keypress", addTaskAfterKeypress)

/*=============================================================
/*  1. still need to also have it add label, anchor tag, h3, and stylized the same way as the rest */
/*      -I believe I need to make the itemCategory "h3" instead of "li", then append that as a child of the "a", append THAT as a child of the "label", append THAT as a child of the "input", append that as a child of the "li" */
/*  2. want to make it so when a Task is checked, it automatically checks the CHILD checkboxes of Task. This relates to #3 in categories.*/ 
/*==================================================================

checkboxTask is defined above in categories

function selectTaskChildCheckboxes() {
    if (checkboxTask = "selected") {
        checkboxTask:child = "selected";
    }
}

checkboxTask.addEventListener("click", selectTaskChildCheckboxes)



/* end of adding tasks (right menu) */


/* more ideas */
// ultimately have it remember the user and changes, so when re-visited it is up to date.
