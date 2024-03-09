import { Injectable } from '@angular/core';
import { User } from '../shared/models/user';
import { BehaviorSubject, from } from 'rxjs';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  deleteUser,
  User as FirebaseUser,
} from '@angular/fire/auth';
import { Database, ref, set, get, remove } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new BehaviorSubject<User | null | undefined>(undefined);
  userAuth: FirebaseUser | undefined | null;
  priceDiscount: number = 1;
  constructor(
    private auth: Auth,
    private database: Database,
    private router: Router
  ) {
    onAuthStateChanged(this.auth, async (userAuth) => {
      this.userAuth = userAuth;
      if (userAuth) {
        const userRef = ref(this.database, `users/${userAuth.uid}`);
        try {
          const user = await get(userRef);
          this.user.next(user.val());
        } catch (error) {
          console.error(error);
        }
      } else {
        this.user.next(null);
      }
    });
  }

  async updateUser(user: Partial<User>) {
    if (!this.user.value) return false;
    const newUserDoc = { ...this.user.value, ...user };
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
      alert('User registered successfully');
      const userRef = ref(this.database, `users/${credentials.user.uid}`);
      user.id = credentials.user.uid;
      await set(userRef, user);
      this.user.next(user);
      return true;
    } catch (error: any) {
      console.error(error);
    }
    return false;
  }

  isAdmin() {
    if (!this.user.value) return false;
    return this.user.value.isAdmin;
  }

  async logOut() {
    try {
      await signOut(this.auth);
      this.user.next(null);
      this.router.navigate(['/signin']);
    } catch (error) {
      console.error(error);
    }
  }

  async login(email: string, password: string) {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
      return true;
    } catch (error: any) {
      console.error(error);
    }
    return false;
  }

  async deleteUser(user: User) {
    const userRef = ref(this.database, `users/${user.id}`);
    this.router.navigate(['/']);
    await remove(userRef);
    if (this.userAuth) {
      await deleteUser(this.userAuth);
    }
    this.logOut();
    alert('User deleted successfully');
  }
}
