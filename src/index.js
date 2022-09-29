import './style.css';
import editingTask from './modules/edit_task.js';
import removeSingleTask from './modules/remove_task.js';
import addToLists from './modules/add_task.js';
import renderLists from './modules/display_task.js';

renderLists();

addToLists();

editingTask();

removeSingleTask();
