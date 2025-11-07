import { Controller, Get, Param } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getAllTodos() {
    return this.todoService.getAllTodos();
  }

  @Get(':id')
  getSingleTodo(@Param('id') id: string) {
    return this.todoService.getSingleTodo(id);
  }
}
