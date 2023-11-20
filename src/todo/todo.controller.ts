import { Controller, Get, Post, Body } from '@nestjs/common';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getAllTodos(): Todo[] {
    return this.todoService.getAllTodos();
  }

  @Post()
  addTodo(@Body() todo: Todo): Todo {
    return this.todoService.addTodo(todo);
  }
}

