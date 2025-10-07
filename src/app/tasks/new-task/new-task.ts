import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { type NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})

export class NewTask {
  @Output() complete = new EventEmitter();
  @Output() addNewTask = new EventEmitter<NewTaskData>()
  enteredTitle: string = ''
  enteredSummary: string  = ''
  enteredDate: string = ''

  onCloseNewTask() {
    console.log("emitiu")
    this.complete.emit()
  }

  onSubmit() {
    let newTask = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate
    }
    this.complete.emit()
    this.addNewTask.emit(newTask)
  }
}
