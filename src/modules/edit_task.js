const editingTask = () => {
  const element = document.querySelectorAll('.text');
  element.forEach((ele) => {
    ele.addEventListener('click', () => {
      const tasks = JSON.parse(localStorage.getItem('TODO'));
      ele.contentEditable = true;
      ele.parentElement.parentElement.lastElementChild.previousElementSibling.classList.add('hidden');
      ele.parentElement.parentElement.lastElementChild.classList.remove('hidden');

      ele.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          if (!ele.value) {
            alert('Please enter a task');
            return;
          }

          tasks.forEach((task) => {
            if (task.index === +ele.dataset.id) {
              task.description = ele.value;
            }
          });
          localStorage.setItem('TODO', JSON.stringify(tasks));
          window.location.reload();
        }
      });
      // if (!ele.value) {
      //   alert('Please enter a task')
      // }
    });
    // ele.addEventListener('change', () => {
    //   console.log(ele.value);
    //   tasks.forEach((task) => {
    //     if (task.index === +ele.previousElementSibling.dataset.id) {
    //       task.description = ele.textContent;
    //       console.log(task.description);
    //       console.log('hi');
    //     }
    //     localStorage.setItem('TODO', JSON.stringify(tasks));
    //   });
    // });
  });
};

export default editingTask;