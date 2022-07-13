import { todoList } from '../interface/todo-list';
import { todo } from '../interface/todo';

export const TODO_LIST: todoList[] = [
  {
    list_id: 1,
    id: {
      1: {
        id: 1,
        title: 'Doing homework',
        description: 'lam gi do di',
        date: new Date(),
        tags: ['hay', 'ho'],
        attach: 'google.com',
      },
      2: {
        id: 2,
        title: 'Doing exercise',
        description: 'lam gi do di 2',
        date: new Date(),
        tags: ['hay', 'ho'],
        attach: 'google.com',
      },
      3: {
        id: 3,
        title: 'Playing game',
        description: 'lam gi do di 3',
        date: new Date(),
        tags: ['hay', 'ho'],
        attach: 'google.com',
      },
    },
    title: 'To do',
    numberOfTodo: 3,
  },
  { list_id: 2, id: [], title: 'In progress', numberOfTodo: 0 },
  {
    list_id: 3,
    id: {
      1: {
        id: 4,
        title: 'Reading books',
        description: 'lam gi do di 4',
        date: new Date(),
        tags: ['hay', 'ho'],
        attach: 'google.com',
      },
    },
    title: 'Completed',
    numberOfTodo: 1,
  },
];

export const TODO: todo[] = [
  {
    id: 1,
    title: 'Doing homework',
    description: 'lam gi do di',
    date: new Date(),
    tags: ['hay', 'ho'],
    attach: 'google.com',
  },
  {
    id: 2,
    title: 'Doing exercise',
    description: 'lam gi do di 2',
    date: new Date(),
    tags: ['hay', 'ho'],
    attach: 'google.com',
  },
  {
    id: 3,
    title: 'Playing game',
    description: 'lam gi do di 3',
    date: new Date(),
    tags: ['hay', 'ho'],
    attach: 'google.com',
  },
  {
    id: 4,
    title: 'Reading books',
    description: 'lam gi do di 4',
    date: new Date(),
    tags: ['hay', 'ho'],
    attach: 'google.com',
  },
];
