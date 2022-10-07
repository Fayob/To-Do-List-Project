import addTask from '../modules/add-task.js';
import storedArray from '../modules/storage.js';
// import removeTask from '../modules/remove-task.js';

describe('test addTask and removeTask', () => {
  test('test add task function', () => {
    addTask('first task');
    addTask('second task');
    addTask('third task');
    expect(storedArray[1].description).toBe('second task');
    expect(storedArray.length).toEqual(3);
  });
});