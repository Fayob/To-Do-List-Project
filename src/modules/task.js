import getItems, { setItems } from './storage.js';

const removeSingleTask = () => {
  document.querySelectorAll('.fa-trash').forEach((ele) => {
    ele.addEventListener('click', () => {
      let tasks = getItems;
      const index = ele.parentElement.firstElementChild.firstElementChild.dataset.id;

      tasks = tasks.filter((task) => task.index !== +index);
      tasks.forEach((task, index) => {
        task.index = index + 1;
      });
      setItems(tasks);

      ele.parentElement.remove();

      window.location.reload();
    });
  });
};

export const removeCompletedTasks = () => {
  const clearCompletedList = document.querySelector('.clear_list');
  clearCompletedList.addEventListener('click', (e) => {
    let tasks = JSON.parse(localStorage.getItem('TODO')) || [];
    tasks = tasks.filter((task) => task.completed !== true);
    tasks.forEach((task, index) => {
      task.index = index + 1;
    });
    setItems(tasks);

    const nodeElement = Array.from(e.target.previousElementSibling.childNodes);
    nodeElement.forEach((element) => {
      if (element.firstElementChild.lastElementChild.classList.contains('line-through')) {
        element.remove();
      }
    });
    window.location.reload();
  });
};
export default removeSingleTask;
