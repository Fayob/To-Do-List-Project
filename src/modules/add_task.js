const input = document.querySelector('.input');

const addToLists = (tasks) => {
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
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