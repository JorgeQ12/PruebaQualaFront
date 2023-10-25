/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DataListQualaComponent } from './dataListQuala.component';

describe('DataListQualaComponent', () => {
  let component: DataListQualaComponent;
  let fixture: ComponentFixture<DataListQualaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataListQualaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataListQualaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
