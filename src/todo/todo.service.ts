import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  getAllTodos() {
    return 'This is for all todos';
  }

  getSingleTodo(id: string) {
    return 'This is for single todo id ' + id;
  }

  saveTodo(title: string, description: string) {
    return (
      'save to do from service = ' + title + ' desc = ' + description
);
  };
  updateTodo(id: string, title: string, description: string) {
    return (
      'update to do from service id = ' +
      id +
      ' title = ' +
      title +
      ' desc = ' +
      description
    );
  }
  DeleteTodo(id: string) {
    return 'delete to do from service id = ' + id;
  }
}
