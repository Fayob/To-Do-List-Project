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
            ele.setCustomValidity('Please enter a task');
            ele.reportValidity();
            setTimeout(() => {
              window.location.reload();
            }, 1200);
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
    });
  });
};

export default editingTask;