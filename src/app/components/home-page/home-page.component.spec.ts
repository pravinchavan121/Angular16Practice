import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePageComponent } from './home-page.component';
import { ShareDataService } from 'src/app/services/share-data.service';
import { of } from 'rxjs';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let shareDataService: ShareDataService;

  beforeEach(async () => {
    const mockShareDataService = {
      setStudentName: jasmine.createSpy('setStudentName'),
      setUserName: jasmine.createSpy('setUserName'),
      getData: jasmine.createSpy('getData').and.returnValue(of({ name: 'Default', age: 100 })),
    };

    await TestBed.configureTestingModule({
      declarations: [HomePageComponent],
      providers: [
        { provide: ShareDataService, useValue: mockShareDataService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    shareDataService = TestBed.inject(ShareDataService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // Test for setStudentName()
  it('should call setStudentName() with selectedValue', () => {
    component.selectedValue = 'Pravin';
    component.getStudentName();

    expect(shareDataService.setStudentName).toHaveBeenCalledWith('Pravin');
  });

  // Test for setUserName()
  it('should call setUserName() with selectedValue', () => {
    component.selectedValue = 'Pravin Chavan';
    component.getStudentName();

    expect(shareDataService.setUserName).toHaveBeenCalledWith('Pravin Chavan');
  });

  // Test for getData()
  it('should set getData() to return an Observable with selectedValue', (done) => {
    component.selectedValue = 'Pravin';
    component.getStudentName();

    shareDataService.getData().subscribe(data => {
      expect(data).toEqual({ name: 'Pravin', age: 100 });
      done();
    });
  });

  // Test for Title 1
  it(`should have as title 1 'Home page is Parent Component'`, () => {
    const fixture = TestBed.createComponent(HomePageComponent);
    const app = fixture.componentInstance;
    expect(app.title_1).toEqual('Home page is Parent Component ');
  });

   // Test for Title 2
  it(`should have as title 2 'Please select student name from below dropdown and when click on student details button then selected student name will display on child Component.'`, () => {
    const fixture = TestBed.createComponent(HomePageComponent);
    const app = fixture.componentInstance;
    expect(app.title_2).toEqual('Please select student name from below dropdown and when click on student details button then selected student name will display on child Component.');
  });

 // Test for Title 3
  it(`should have as title 3 'Student Details Is Child Component'`, () => {
    const fixture = TestBed.createComponent(HomePageComponent);
    const app = fixture.componentInstance;
    expect(app.title_3).toEqual('Student Details Is Child Component');
  });
});
