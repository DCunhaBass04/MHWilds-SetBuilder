import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqSenderComponent } from './req-sender.component';

describe('ReqSenderComponent', () => {
  let component: ReqSenderComponent;
  let fixture: ComponentFixture<ReqSenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReqSenderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReqSenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
