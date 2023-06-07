import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlVisitsComponent } from './url-visits.component';

describe('UrlVisitsComponent', () => {
  let component: UrlVisitsComponent;
  let fixture: ComponentFixture<UrlVisitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UrlVisitsComponent]
    });
    fixture = TestBed.createComponent(UrlVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
