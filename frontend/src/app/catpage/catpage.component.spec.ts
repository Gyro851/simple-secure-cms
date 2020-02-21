import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatpageComponent } from './catpage.component';

describe('CatpageComponent', () => {
  let component: CatpageComponent;
  let fixture: ComponentFixture<CatpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
