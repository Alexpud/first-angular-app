import { Component, Input } from '@angular/core';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';
import { NewTaskData } from './task/task.model';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})

export class Tasks {
  @Input() name: string | undefined
  @Input() userId: string | undefined
  displayNewTask = false
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]

  get tasksFromUser() {
    return this.tasks.filter(task => task.userId == this.userId)!
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id != id)
  }

  onStartAddTask() {
    this.displayNewTask = true
  }

  onCancelAddTask() {
    this.displayNewTask = false
  }

  onAddNewTask(newTask: NewTaskData) {
    this.tasks.push({
      userId: this.userId!,
      summary: newTask.summary,
      title: newTask.title,
      dueDate: newTask.dueDate,
      id: 't' + (this.tasks.length + 1)
    })
  }
}
