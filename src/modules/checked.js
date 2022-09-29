export const checked = (check, tasks) => {
  const index = check.dataset.id - 1;

  if (tasks[index].completed) {
    check.checked = true;
    check.parentElement.lastElementChild.classList.add('line-through');
    check.parentElement.lastElementChild.classList.add('color');
  } else {
    check.checked = false;
    check.parentElement.lastElementChild.classList.remove('line-through');
    check.parentElement.lastElementChild.classList.remove('color');
  }
};

export const checkboxClick = () => {
  const checkboxs = document.querySelectorAll('#checks');
  checkboxs.forEach((checkbox) => {
    checkbox.addEventListener('click', (e) => {
      const tasks = JSON.parse(localStorage.getItem('TODO')) || [];
      const index = e.target.dataset.id - 1;

      if (checkbox.checked) {
        tasks[index].completed = true;
      } else {
        tasks[index].completed = false;
      }

      localStorage.setItem('TODO', JSON.stringify(tasks));
      checked(e.target, tasks);
    });
  });
};
