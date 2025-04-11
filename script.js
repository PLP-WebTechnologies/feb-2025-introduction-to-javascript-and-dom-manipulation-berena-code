// Change text content dynamically
document.querySelector('.header h1').textContent = "Updated To-Do List";

// Modify CSS styles via JavaScript
const header = document.querySelector('.header h1');
header.style.color = "darkblue";
header.style.fontSize = "40px";

// Add a button to add tasks
const button = document.createElement('button');
button.textContent = "Move Checked Tasks";
button.style.marginTop = "20px";
const taskList = document.querySelector('.to-do-list ul');
taskList.parentNode.insertBefore(button, taskList.nextSibling);

// Move checked tasks to the "Images" section
button.addEventListener('click', () => {
    const checkedTasks = document.querySelectorAll('.to-do-list ul li input:checked');
    const imagesSection = document.querySelector('.image-container');

    checkedTasks.forEach(task => {
        const taskItem = task.parentElement; // Get the parent <li> of the checkbox
        imagesSection.appendChild(taskItem); // Move the <li> to the images section
    });
});