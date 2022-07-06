import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxUtilToolsComponent } from './ngx-util-tools.component';

describe('NgxUtilToolsComponent', () => {
  let component: NgxUtilToolsComponent;
  let fixture: ComponentFixture<NgxUtilToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxUtilToolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxUtilToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
