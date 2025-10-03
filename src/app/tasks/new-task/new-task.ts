import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @Output() complete = new EventEmitter();

  onCloseNewTask() {
    console.log("emitiu")
    this.complete.emit()
  }
}
