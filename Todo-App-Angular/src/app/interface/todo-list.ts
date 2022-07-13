import { todo } from "./todo";

export interface todoList {
  list_id: number;
  id: {
    [key: number]: todo;
  };
  title: string;
  numberOfTodo: number;
}
