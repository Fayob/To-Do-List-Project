import getItems, { setItems } from './storage.js';

const addToLists = () => {
  const input = document.querySelector('.input');
  input.addEventListener('keypress', (e) => {
    const tasks = getItems;
    if (e.key === 'Enter') {
      if (!input.value) {
        input.setCustomValidity('Please enter a task');
        input.reportValidity();
        return;
      }

      const eachTask = {
        description: input.value,
        completed: false,
        index: tasks.length + 1,
      };

      tasks.push(eachTask);
      setItems(tasks);
    }
  });
};

export default addToLists;