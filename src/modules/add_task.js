const input = document.querySelector('.input');

const addToLists = () => {
  input.addEventListener('keypress', (e) => {
    const tasks = JSON.parse(localStorage.getItem('TODO')) || [];
    if (e.key === 'Enter') {
      if (!input.value) {
        input.setCustomValidity('Please enter a task');
        input.reportValidity();
        setTimeout(() => {
          window.location.reload();
        }, 1200);
        return;
      }

      const eachTask = {
        description: input.value,
        completed: false,
        index: tasks.length + 1,
      };

      tasks.push(eachTask);
      localStorage.setItem('TODO', JSON.stringify(tasks));
    }
  });
};

export default addToLists;