import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningScreenComponent } from './opening-screen.component';

describe('OpeningScreenComponent', () => {
  let component: OpeningScreenComponent;
  let fixture: ComponentFixture<OpeningScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpeningScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpeningScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
