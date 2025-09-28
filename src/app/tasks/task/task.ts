import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type ITask } from './task.model';
@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css'
})

export class Task {
  @Input({ required: true }) task! : ITask
  @Output() complete = new EventEmitter<string>();

  onComplete() {
    this.complete.emit(this.task.id);
  }
}
