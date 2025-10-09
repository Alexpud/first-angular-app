import { Component, Input } from '@angular/core';
import { Task } from './task/task';
import { NewTaskComponent } from './new-task/new-task';
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTaskComponent],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})

export class TasksComponent {
  @Input() name: string | undefined
  @Input() userId!: string;
  displayNewTask = false
  constructor(private tasksService: TasksService) {
  }

  get tasksFromUser() {
    return this.tasksService.getUserTasks(this.userId!)
  }

  onStartAddTask() {
    this.displayNewTask = true
  }

  onCancelAddTask() {
    this.displayNewTask = false
  }
}
