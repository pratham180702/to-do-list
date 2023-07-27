var count = 0;

document.addEventListener("DOMContentLoaded", function () {
  console.log("entered here");
  var submitButton = document.getElementById("submitBtn");
  var taskInput = document.getElementById("taskInput");
  var tasksDisplay = document.getElementById("display-tasks");

  submitButton.addEventListener("click", function () {
    console.log("Entered");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
      var taskContainer = document.createElement("div");
      taskContainer.classList.add(count + "-task");
      console.log(taskContainer.className);
      count++;
      var taskElement = document.createElement("p");
      var taskElement2 = document.createElement("p");
      var deleteButton = document.createElement("button");

      deleteButton.textContent = "Delete";
      deleteButton.classList.add("delete-button");
      taskElement.textContent = taskText;
      taskElement2.textContent = "task " + count;

      taskContainer.appendChild(taskElement2);
      taskContainer.appendChild(taskElement);
      taskContainer.appendChild(deleteButton);
      tasksDisplay.appendChild(taskContainer);

      taskInput.value = "";

      deleteButton.addEventListener("click", function () {
        // Remove the entire task by removing the taskContainer
        tasksDisplay.removeChild(taskContainer);
      });
    }
  });
});
