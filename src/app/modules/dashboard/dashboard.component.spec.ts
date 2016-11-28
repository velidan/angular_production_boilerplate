import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';


import { DashboardComponent } from "./dashboard.component";


let comp:    DashboardComponent;
let fixture: ComponentFixture<DashboardComponent>;
let de:      DebugElement;
let el:      HTMLElement;

describe("Dashboard test", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
    });

    fixture = TestBed.createComponent(DashboardComponent);

    comp = fixture.componentInstance; 

    
    de = fixture.debugElement.query(By.css('.test-dashboard-header'));
    el = de.nativeElement;

  });

  it('should display original title', () => {
	  fixture.detectChanges();
	  expect(el.textContent).toContain(comp.title);
	});

	it('should display a different test title', () => {
	  comp.title = 'Changed Title';
	  fixture.detectChanges();
	  expect(el.textContent).toContain('Changed Title');
	});

})