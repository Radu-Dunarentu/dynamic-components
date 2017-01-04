/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WorldHelloComponent } from './world-hello.component';

describe('WorldHelloComponent', () => {
  let component: WorldHelloComponent;
  let fixture: ComponentFixture<WorldHelloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldHelloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldHelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
