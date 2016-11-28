import { TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
describe('App test', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [AppComponent],  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]});
  });
  it ('App component should be an instance of itself', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  });
});