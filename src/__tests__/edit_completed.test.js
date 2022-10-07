import addTask from '../modules/add-task.js';
import storedArray from '../modules/storage.js';
import removeTask from '../modules/remove_task.js';
import editTask from '../modules/edit-task.js';
import clearCompletedTask from '../modules/clear-completed-task.js';

describe('test addTask and removeTask', () => {
    test('test add task function', () => {
    addTask('first task');
    addTask('second task');
    addTask('third task');
    expect(storedArray[0].description).toBe('first task');
    expect(storedArray.length).toEqual(3);
  });
  test('test remove task function', () => {
    removeTask(0);
    expect(storedArray).toHaveLength(2);
    expect(storedArray[0].description).toBe('second task');
  });
  test('test remove task function', () => {
    editTask(0, 'changed task');
    expect(storedArray[0].description).toBe('changed task');
  });
  test('test clear completed task function', () => {
    storedArray[1].completed = true;
    clearCompletedTask();
    expect(storedArray).toHaveLength(1);
  });
});