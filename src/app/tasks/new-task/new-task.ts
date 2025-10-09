import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})

export class NewTaskComponent {
  @Input({ required: true}) userId!: string
  @Output() complete = new EventEmitter();
  @Output() addNewTask = new EventEmitter<NewTaskData>()
  enteredTitle: string = ''
  enteredSummary: string  = ''
  enteredDate: string = ''

  private tasksService: TasksService = inject(TasksService)

  onCloseNewTask() {
    this.complete.emit()
  }

  onSubmit() {
    let newTask = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate
    }

    this.tasksService.addTask(newTask, this.userId)
    this.complete.emit()
  }
}
