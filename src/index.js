import './style.css';

const ul = document.querySelector('.to_do_lists');

const dailyTasks = [
  {
    description: 'first task',
    completed: false,
    index: 1,
  },
  {
    description: 'fifth task',
    completed: false,
    index: 5,
  },
  {
    description: 'second task',
    completed: false,
    index: 2,
  },
  {
    description: 'fourth task',
    completed: false,
    index: 4,
  },
  {
    description: 'third task',
    completed: false,
    index: 3,
  },
];

dailyTasks.sort((a, b) => a.index - b.index);

dailyTasks.forEach((task) => {
  const li = document.createElement('li');
  li.classList.add('to_do_list');
  li.innerHTML = `
  <div>
  <input type="checkbox" name="check" id="checks" />
  ${task.description} </div>
  <i class="fa fa-ellipsis-v"></i> 
  `;
  ul.appendChild(li);
});
