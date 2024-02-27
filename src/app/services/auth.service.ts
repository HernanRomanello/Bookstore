import {
  AfterViewInit,
  Injectable,
  afterNextRender,
  afterRender,
} from '@angular/core';
import { User } from '../shared/models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User | null = null;
  errors: Set<string> = new Set<string>();
  constructor() {
    afterNextRender(() => {
      const user = sessionStorage.getItem('user');
      if (user) {
        this.user = JSON.parse(user);
      }
    });
  }

  updateUser(user: Partial<User>) {
    const users = this.getUsers();
    const userIndex = users.findIndex(
      (u: User) => u.email === this.user?.email
    );
    users[userIndex] = { ...users[userIndex], ...user };
    localStorage.setItem('users', JSON.stringify(users));
    this.user = users[userIndex];
    sessionStorage.setItem('user', JSON.stringify(users[userIndex]));
  }

  getUsers() {
    return JSON.parse(localStorage.getItem('users') || '[]') as User[];
  }

  register(user: User) {
    const users = this.getUsers();

    const userExists = users.find((u) => u.email === user.email);
    if (userExists) {
      this.errors.add('User already exists');
      return false;
    }

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    this.user = user;
    return true;
  }

  clearErrors() {
    this.errors.clear();
  }

  hasErrors() {
    return this.errors.size > 0;
  }

  logOut() {
    sessionStorage.removeItem('user');
    this.user = null;
  }

  login(email: string, password: string) {
    const users = this.getUsers();

    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      sessionStorage.setItem('user', JSON.stringify(user));
      this.user = user;
      return true;
    }
    this.errors.add('Invalid email or password');
    return false;
  }
}
