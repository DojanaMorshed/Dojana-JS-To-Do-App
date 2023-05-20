// ****** Dojana Morshed Project 2 ******
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let tasks = [];

function addTask(description, dueDate, priority) {
  tasks.push({description, dueDate, priority, completed: false});
}

function listAllTasks() {
  console.log('All tasks:');
  tasks.forEach(task => console.log(task));
}

function listCompletedTasks() {
  console.log('Completed tasks:');
  tasks.filter(task => task.completed).forEach(task => console.log(task));
}

function markTaskAsDone(description) {
  const task = tasks.find(task => task.description === description);
  if (task) {
    task.completed = true;
    console.log(`Task "${description}" marked as done.`);
  } else {
    console.log(`Task "${description}" not found.`);
  }
}

function deleteTask(description) {
  const index = tasks.findIndex(task => task.description === description);
  if (index !== -1) {
    tasks.splice(index, 1);
    console.log(`Task "${description}" deleted.`);
  } else {
    console.log(`Task "${description}" not found.`);
  }
}

function sortTasksByDueDate() {
  tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  console.log('Tasks sorted by due date:');
  tasks.forEach(task => console.log(task));
}

function sortTasksByPriority() {
  tasks.sort((a, b) => a.priority - b.priority);
  console.log('Tasks sorted by priority:');
  tasks.forEach(task => console.log(task));
}

function clearAllTasks() {
  tasks = [];
  console.log('All tasks cleared.');
}

function printMenu() {
  console.log('***************************');
  console.log('* Dojana Morshed Project 2* ');
  console.log('*  Welcome to JS TODO-APP *');
  console.log('***************************');
  console.log('Select an action:');
  console.log('1) Add a new task');
  console.log('2) List all tasks');
  console.log('3) List completed tasks');
  console.log('4) Mark the task as done');
  console.log('5) Delete a task');
  console.log('6) Sort tasks by the due date');
  console.log('7) Sort tasks by priority');
  console.log('8) Clear all tasks');
  console.log('***************************');
}

rl.on('line', (input) => {
  const choice = parseInt(input);
  switch (choice) {
    case 1:
      rl.question('Enter task description: ', (description) => {
        rl.question('Enter due date (YYYY-MM-DD): ', (dueDate) => {
          rl.question('Enter priority (1-5): ', (priority) => {
            addTask(description, dueDate, priority);
            console.log(`Task "${description}" added.`);
            printMenu();
          });
        });
      });
      break;
    case 2:
      listAllTasks();
      printMenu();
      break;
    case 3:
      listCompletedTasks();
      printMenu();
      break;
    case 4:
      rl.question('Enter task description: ', (description) => {
        markTaskAsDone(description);
        printMenu();
      });
      break;
    case 5:
      rl.question('Enter task description: ', (description) => {
        deleteTask(description);
        printMenu();
      });
      break;
    case 6:
      sortTasksByDueDate();
      printMenu();
      break;
    case 7:
      sortTasksByPriority();
      printMenu();
      break;
    case 8:
      clearAllTasks();
      printMenu();
      break;
    default:
      console.log('Invalid choice.');
      printMenu();
      break;
  }
});

printMenu();
