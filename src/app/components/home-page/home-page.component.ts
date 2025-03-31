import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  studentName = ['Select Student Name', 'Mark', 'John', 'David', 'Peter'];
  selectedValue: any = "Select Student Name";

  title_1:string = "Home page is Parent Component ";
  title_2:string = "Please select student name from below dropdown and when click on student details button then selected student name will display on child Component.";
  title_3:string = "Student Details Is Child Component";

  constructor(private shareDataService: ShareDataService) { }

  ngOnInit() {
 
  }

  getStudentName() {
    // Set 'selectedValue' using 'Subject' from parent to child 
    this.shareDataService.setStudentName(this.selectedValue);

    // Set 'selectedValue' using 'Signal' from parent to child 
    this.shareDataService.setUserName(this.selectedValue)
    
    // Set 'selectedValue' using 'Observable' from parent to child     
    this.shareDataService.getData = () => of({ name: this.selectedValue, age: 100 });
  }
  
}
