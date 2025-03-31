import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
  selector: 'app-students-details',
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.scss']
})
export class StudentsDetailsComponent {

  studentName: any;

  userName: any;

  user$: Observable<{ name: string; age: number }>;

  title_1: string = "Student Name From Parent Using Subject";
  title_2: string = "Username From Parent Using Signal";
  title_3: string = "Username & Age from Parent Using Observable";

  constructor(private shareDataService: ShareDataService) {
    this.user$ = this.shareDataService.getData()
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.shareDataService.studentName.subscribe((receivedData) => {
      this.studentName = receivedData; // Update the local data whenever it changes      
    });

    this.userName = this.shareDataService.userName;
  }

}
