// Contact Form Validation

document.getElementById("contactForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || message === ""){

        alert("Please fill all the fields.");
        return;

    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){

        alert("Please enter a valid email.");
        return;

    }

    alert("Form Submitted Successfully!");

    document.getElementById("contactForm").reset();

});


// Add Task

function addTask(){

    let taskInput = document.getElementById("taskInput");

    let task = taskInput.value.trim();

    if(task === ""){

        alert("Please enter a task.");

        return;

    }

    let li = document.createElement("li");

    li.innerHTML = `
        ${task}
        <button class="delete-btn" onclick="deleteTask(this)">
            Delete
        </button>
    `;

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";

}


// Delete Task

function deleteTask(button){

    button.parentElement.remove();

}