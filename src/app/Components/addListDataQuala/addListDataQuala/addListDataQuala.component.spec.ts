/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddListDataQualaComponent } from './addListDataQuala.component';

describe('AddListDataQualaComponent', () => {
  let component: AddListDataQualaComponent;
  let fixture: ComponentFixture<AddListDataQualaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddListDataQualaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddListDataQualaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
