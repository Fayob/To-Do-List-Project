const removeSingleTask = () => {
  document.querySelectorAll('.fa-trash').forEach((ele) => {
    ele.addEventListener('click', () => {
      let tasks = JSON.parse(localStorage.getItem('TODO')) || [];
      const index = ele.parentElement.firstElementChild.firstElementChild.dataset.id;
      console.log(+index);
      tasks = tasks.filter((task) => task.index !== +index);
      tasks.forEach((task, index) => {
        task.index = index + 1;
      });
      console.log(tasks);
      localStorage.setItem('TODO', JSON.stringify(tasks));

      ele.parentElement.remove();

      window.location.reload();
    });
  });
};
export default removeSingleTask;
