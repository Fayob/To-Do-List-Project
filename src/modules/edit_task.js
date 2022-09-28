const editingTask = () => {
  const element = document.querySelectorAll('.text');
  element.forEach((ele) => {
    ele.addEventListener('click', () => {
      ele.contentEditable = true;
      //   ele.style.backgroundColor = 'lightyellow';
      ele.parentElement.parentElement.lastElementChild.previousElementSibling.classList.add('hidden');
      ele.parentElement.parentElement.lastElementChild.classList.remove('hidden');
    });
  });
};

export default editingTask;