const removeSingleTask = (tasks) => {
  document.querySelectorAll('.fa-trash').forEach((ele) => {
    ele.addEventListener('click', () => {
      const index = ele.parentElement.firstElementChild.firstElementChild.dataset.id;
      tasks = tasks.filter((task) => task.index !== +index);
      tasks.forEach((task, index) => {
        task.index = index + 1;
      });
      localStorage.setItem('TODO', JSON.stringify(tasks));

      ele.parentElement.remove();
    });
  });
};
export default removeSingleTask;
