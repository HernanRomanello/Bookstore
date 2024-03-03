import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../shared/models/user';
import { Database, get, ref } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users = new BehaviorSubject<User[]>([]);
  constructor(private database: Database) {
    this.getUsers();
  }
  async getUsers(): Promise<void> {
    const usersRef = await get(ref(this.database, 'users'));
    const users: User[] = [];
    usersRef.forEach((user) => {
      users.push(user.val());
    });
    this.users.next(users);
  }
}
