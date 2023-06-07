import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUrlsComponent } from './user-urls.component';

describe('UserUrlsComponent', () => {
  let component: UserUrlsComponent;
  let fixture: ComponentFixture<UserUrlsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserUrlsComponent]
    });
    fixture = TestBed.createComponent(UserUrlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
