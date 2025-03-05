let parent = document.getElementById('parent');
let writeTask = document.getElementById('writeTask');
let addTask = document.getElementById('addTask');
let showTasks = document.getElementById('showTasks');
let task;

if (localStorage.task != null) {
    task = JSON.parse(localStorage.task)
} else {
    task = [];
}

addTask.addEventListener('click', () => {
    let data = {
        value: writeTask.value,
    }
    
    task.push(data);
    localStorage.setItem('task', JSON.stringify(task));

    showData();
});

function showData () {
    showTasks.innerHTML = '';
    for (let i = 0; i < task.length; i++) {
        showTasks.innerHTML += `
            <div class="taskParent">
                <div>
                    <p><span>${i+1}-</span> ${task[i].value}</p>
                </div>
                <div>
                    <button type="button">done</button>
                    <button type="button">delete</button>
                </div>
            </div>
        `
    }
}

showData()


