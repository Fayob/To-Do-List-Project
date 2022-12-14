import './style.css';
import editingTask from './modules/edit_task.js';
import removeSingleTask, { removeCompletedTasks } from './modules/remove_task.js';
import addToLists from './modules/add_task.js';
import renderLists from './modules/display_task.js';
import { checkboxClick, checked } from './modules/checked.js';

renderLists();

document.addEventListener('DOMContentLoaded', () => {
  const tasks = JSON.parse(localStorage.getItem('TODO')) || [];
  document.querySelectorAll('#checks').forEach((check) => {
    checked(check, tasks);
  });
});

addToLists();

checkboxClick();

editingTask();

removeSingleTask();

removeCompletedTasks();
