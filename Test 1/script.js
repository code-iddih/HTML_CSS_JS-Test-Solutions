let editingTodo = null; // Variable to track the todo being edited

document.addEventListener("DOMContentLoaded", () => {
    loadTodos(); // Loading saved todos from local storage
});

// Function to add or update a todo item
function addOrUpdateTodo() {
    const todoTextInput = document.getElementById("todo-text");
    const addButton = document.getElementById("add-btn");
    const todoText = todoTextInput.value.trim();

    if (todoText === "") return; // Preventing empty todos

    if (editingTodo) {
        // If editing, update existing item
        editingTodo.firstChild.textContent = todoText;
        editingTodo.classList.remove("editing");
        editingTodo = null; // Clearing editing state
        addButton.textContent = "Add"; // Changing button back to "Add"
    } else {
        // Otherwise, create a new todo item
        const todoList = document.getElementById("todo-list");
        const li = createTodoElement(todoText);
        todoList.appendChild(li);
    }

    saveTodos();
    todoTextInput.value = ""; // Clearing input field
}

// Function to create a todo list item
function createTodoElement(todoText) {
    const li = document.createElement("li");
    li.innerHTML = `<span>${todoText}</span>
        <div class="actions">
            <button class="edit-btn" onclick="editTodo(this)">Edit</button>
            <button class="delete-btn" onclick="deleteTodo(this)">Delete</button>
        </div>`;
    return li;
}

// Function to edit a todo item
function editTodo(button) {
    const li = button.parentElement.parentElement;
    const todoTextInput = document.getElementById("todo-text");
    const addButton = document.getElementById("add-btn");

    todoTextInput.value = li.firstChild.textContent; // Moving text to input field
    todoTextInput.focus(); // Focusing the input field
    li.classList.add("editing"); // Highlight editing item
    editingTodo = li; // Tracking the editing item
    addButton.textContent = "Edit"; // Changing button to "Edit"
}

// Function to delete a todo item
function deleteTodo(button) {
    const li = button.parentElement.parentElement;
    li.remove(); // Removing from DOM
    saveTodos();
}

// Function to save todos to local storage
function saveTodos() {
    const todos = [];
    document.querySelectorAll("#todo-list li span").forEach(todo => {
        todos.push(todo.textContent);
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Function to load todos from local storage
function loadTodos() {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    const todoList = document.getElementById("todo-list");

    todos.forEach(todoText => {
        const li = createTodoElement(todoText);
        todoList.appendChild(li);
    });
}
