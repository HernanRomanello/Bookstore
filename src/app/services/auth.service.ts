import {
  AfterViewInit,
  Injectable,
  afterNextRender,
  afterRender,
} from '@angular/core';
import { User } from '../shared/models/user';
import { BehaviorSubject, Subject, from } from 'rxjs';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from '@angular/fire/auth';
import { Database, ref, set, get } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new BehaviorSubject<User | null | undefined>(undefined);
  errors: Set<string> = new Set<string>();
  priceDiscount: number = 1;
  constructor(private auth: Auth, private database: Database) {
    onAuthStateChanged(this.auth, async (userAuth) => {
      if (userAuth) {
        const userRef = ref(this.database, `users/${userAuth.uid}`);
        try {
          const user = await get(userRef);
          this.user.next(user.val());
        } catch (e) {}
      } else {
        this.user.next(null);
      }
    });
  }

  async updateUser(user: Partial<User>) {
    if (!this.user.value) return false;
    const newUserDoc = { ...this.user, ...user };
    const userRef = ref(this.database, `users/${this.user.value.id}`);
    await set(userRef, newUserDoc);
    this.user.next(newUserDoc as User);
    return true;
  }

  getUsers(): Observable<User[]> {
    const usersRef = ref(this.database, `users`);
    const usersPromise = get(usersRef).then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val() as User[];
      }
      return [];
    });

    return from(usersPromise); // Convert promise to observable
  }

  async register(user: User, password: string) {
    try {
      const credentials = await createUserWithEmailAndPassword(
        this.auth,
        user.email,
        password
      );

      if (!credentials.user) throw new Error('User not found');

      const userRef = ref(this.database, `users/${credentials.user.uid}`);
      user.id = credentials.user.uid;
      await set(userRef, user);
      this.user.next(user);
      return true;
    } catch (e: any) {
      this.errors.add(e.message);
    }
    return false;
  }

  isAdmin() {
    if (!this.user.value) return false;
    return this.user.value.isAdmin;
  }

  clearErrors() {
    this.errors.clear();
  }

  hasErrors() {
    return this.errors.size > 0;
  }

  async logOut() {
    try {
      await signOut(this.auth);
    } catch (e) {}
  }

  async login(email: string, password: string) {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
      return true;
    } catch (e: any) {
      this.errors.add(e.message);
    }
    return false;
  }
}
