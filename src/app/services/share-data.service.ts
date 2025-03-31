import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  studentName = new BehaviorSubject<any>("");

  userName = signal("")

  constructor() { }

  setStudentName(value:any){
    return this.studentName.next(value)
  }

  setUserName(value:any){
    return this.userName.set(value)
  }

  private userData = { name: 'John Doe', age: 30 };

  // Returns an Observable (simulating API response)
  getData(): Observable<{ name: string; age: number }> {
    return of(this.userData); // Converts the object into an Observable
  }
}
