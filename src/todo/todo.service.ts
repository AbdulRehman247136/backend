import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  getAllTodos() {
    return 'This is for all todos';
  }

  getSingleTodo(id: string) {
    return 'This is for single todo id ' + id;
  }

  saveTodo(title:string, description: string) {
    return(
        'sa'
    )
  }
}
