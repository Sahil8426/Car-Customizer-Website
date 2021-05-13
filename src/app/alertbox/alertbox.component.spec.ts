import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertboxComponent } from './alertbox.component';

describe('AlertboxComponent', () => {
  let component: AlertboxComponent;
  let fixture: ComponentFixture<AlertboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


class alertbox {  
  show() {  
   var str = ( < HTMLTextAreaElement > document.getElementById("Text1")).value;  
   alert("TextBox Value is " + str);  
  }  
 }  
 window.onload = () => {  
  var msb = new alertbox();  
  var bttn = document.getElementById("Button1");  
  bttn.onclick = function() {  
   msb.show();  
  }  
 };  
