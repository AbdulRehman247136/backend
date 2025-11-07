import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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
  @Post()
  saveTodo(
    @Body('title') title: string,
    @Body('description') description: string,
  ) {
    return this.todoService.saveTodo(title, description);
  }

  @Put(':id')
  updateTodo(
    @Param('id') id: string,
    @Body('title') title: string,
    @Body('description') description: string,
  ) {
    return this.todoService.updateTodo(id, title, description);
  }
  @Delete(':id')
  deleteTodo(@Param('id') id: string) {
    return 'delete to do from controller id = ' + id;
  }
}
