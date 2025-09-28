import { Component, Input, Output, EventEmitter } from '@angular/core';
import { type DummyUser } from './user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})

export class User {
  @Input({ required: true }) user!: DummyUser
  @Output() select = new EventEmitter<string>();

  onselectUser() {
    this.select.emit(this.user.id)
  }

  imagePath() : string {
    return `assets/users/${this.user.avatar}`
  }
}
