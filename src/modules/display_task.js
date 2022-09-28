const ul = document.querySelector('.to_do_lists');

const renderLists = (tasks) => {
  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.classList.add('to_do_list');
    li.innerHTML = `
 <div class="container">
 <input type="checkbox" name="check" id="checks" data-id=${task.index} />
 <p class="text">${task.description} </p>
 </div>
 <i class="fa fa-ellipsis-v"></i>
 <i class="fa fa-trash hidden" ></i>
 `;
    ul.appendChild(li);
  });
};

export default renderLists;