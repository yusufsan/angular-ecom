import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGirdComponent } from './user-gird.component';

describe('UserGirdComponent', () => {
  let component: UserGirdComponent;
  let fixture: ComponentFixture<UserGirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
