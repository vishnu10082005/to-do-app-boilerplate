var inputTask = document.getElementById('input')
var add = document.getElementById('button')

var tasksItems = document.getElementById('todolist')

var tasks = []


function addItem() {
    if (inputTask.value != '') {
        tasks.push(inputTask.value)
    }
    else {
        alert('The Task is Empty')
    }
    inputTask.value = ''
    display()
}

inputTask.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        addItem()
    }
})

add.addEventListener('click', addItem)


function dlt(i) {
    tasks.splice(i, 1)
    display()
}
// The dlt function deletes a task at a specific index i from the tasks array and then calls display to update the task list.

// Example: If you have three tasks in the list and you call dlt(1), it will delete the task at index 1 (the second task).

function edit(i) {
    value = prompt('Your Edit: ')
    tasks.splice(i, 1, value)
    display()
}

//The edit function prompts the user to enter a new value for a task at a specific index i. It then updates the task list with the new value.

// Example: If you call edit(0) and enter "Walk the dog," it will replace the first task with "Walk the dog."

function display() {
    tasksItems.innerHTML = ''
    tasks.map((curr, i) => {
        var listItem = `<li id="item">
        <div>${curr}</div>
        <div>
          <span onclick="dlt(${i})">&times;</span>
          <span>|</span>
          <span onclick="edit(${i})">Edit</span>
        </div>
      </li>`

        tasksItems.innerHTML += listItem
    })
}
function editItem(index) {
    //get new value from user 
    var newValue = prompt("pls edit")
    //insert the value at that index
    todoArr.splice(index, 1)
    display()

}
//The edit function prompts the user to enter a new value for a task at a specific index i. It then updates the task list with the new value.

// Example: If you call edit(0) and enter "Walk the dog," it will replace the first task with "Walk the dog."




function editItem(index) {
    //get new value from user 
    var newValue = prompt("pls edit")
    //insert the value at that index
    todoArr.splice(index, 1, newValue)
    display()

}

