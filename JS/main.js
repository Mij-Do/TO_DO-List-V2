// call variables
let parent = document.getElementById('parent');
let writeTask = document.getElementById('writeTask');
let addTask = document.getElementById('addTask');
let showTasks = document.getElementById('showTasks');
let task;
// theme
let darkTheme = document.getElementById('darkTheme');
let normal = document.getElementById('normal');

// add tasks to localstorage 
if (localStorage.task != null) {
    task = JSON.parse(localStorage.task)
} else {
    task = [];
}

addTask.addEventListener('click', () => {
    let data = {
        value: writeTask.value,
        complate: false,
    }
    
    task.push(data);
    localStorage.setItem('task', JSON.stringify(task));

    writeTask.value = '';
    showData();
});

// showData 
function showData () {
    showTasks.innerHTML = '';
    for (let i = 0; i < task.length; i++) {
        let completedClass = task[i].complate ? 'completed' : '';

        showTasks.innerHTML += `
            <div class="taskParent">
                <div>
                    <p id="task${i}" class="${completedClass}"><span>${i+1}-</span> ${task[i].value}</p>
                </div>
                <div>
                    <button onClick="doneTask (${i})" type="button">done</button>
                    <button onClick="deleteTask (${i})" type="button">delete</button>
                </div>
            </div>
        `
    }
}

showData ();

// delete task btn 
function deleteTask (id) {
    task.splice(id, 1);
    localStorage.task = JSON.stringify(task);
    showData ();
}

// done task btn

function doneTask (id) {
    let complateTask = document.getElementById(`task${id}`);
    task[id].complate = true;
    localStorage.setItem('task', JSON.stringify(task));
    complateTask.classList.toggle('completed');
}

// themes
normal.classList.add('hide');
let puples = document.querySelectorAll('.puples');
let header = document.getElementById('header');

function darkMode () {
    localStorage.setItem('bodyColor', '#333');
    localStorage.setItem('parentColor', 'black');
    localStorage.setItem('headerColor', 'gray');
    normal.classList.remove('hide');
    darkTheme.classList.add('hide');
    if (localStorage.bodyColor) {
        document.body.style.backgroundColor = localStorage.bodyColor;
        parent.style.backgroundColor = localStorage.parentColor;
        header.style.backgroundColor = localStorage.headerColor;
    }
}

function backToNormal () {
    localStorage.removeItem('bodyColor');
    localStorage.removeItem('parentColor');
    localStorage.removeItem('headerColor');
    document.body.style.backgroundColor = '#8f4f8f';
    parent.style.backgroundColor = 'purple';
    header.style.backgroundColor = '#c06fc0';
    darkTheme.classList.remove('hide');
    normal.classList.add('hide');
}