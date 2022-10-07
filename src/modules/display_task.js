import getItems from './storage.js';

const ul = document.querySelector('.to_do_lists');

const renderLists = () => {
  const tasks = getItems;
  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.classList.add('to_do_list');
    li.innerHTML = `
   <div class="container">
   <input type="checkbox" name="check" id="checks" data-id=${task.index} />
   <input class="text" data-id=${task.index} value='${task.description}'  />
   </div>
   <i class="fa fa-ellipsis-v"></i>
   <i class="fa fa-trash hidden" ></i>
   `;
    ul.appendChild(li);
  });
};

export default renderLists;