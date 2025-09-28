import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { User } from './user/user';
import { Tasks } from './tasks/tasks';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-root',
  imports: [Header, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-angular-app');
  users = DUMMY_USERS
  selectedUserId?: string

  onSelectUser(id: string) {
    this.selectedUserId = id
  }

  get selectedUser()  {
    return this.users.find((user) => user.id == this.selectedUserId)
  }
}
