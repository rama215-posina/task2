// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMsg = document.getElementById("formMessage");

  if (!email.includes("@") || name === "" || message === "") {
    formMsg.textContent = "Please fill all fields with a valid email!";
    formMsg.style.color = "red";
  } else {
    formMsg.textContent = "Form submitted successfully!";
    formMsg.style.color = "green";
    this.reset();
  }
});

// To-Do List Functionality
function addTask() {
  const input = document.getElementById("todoInput");
  const taskText = input.value.trim();

  if (taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;
    li.onclick = function () {
      this.remove();
    };
    document.getElementById("todoList").appendChild(li);
    input.value = "";
  }
}