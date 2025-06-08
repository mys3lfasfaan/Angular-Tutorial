import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextTutorialComponent } from './text-tutorial.component';

describe('TextTutorialComponent', () => {
  let component: TextTutorialComponent;
  let fixture: ComponentFixture<TextTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextTutorialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
