import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentBuyersLibraryComponent } from './agent-buyers-library.component';

describe('AgentBuyersLibraryComponent', () => {
  let component: AgentBuyersLibraryComponent;
  let fixture: ComponentFixture<AgentBuyersLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentBuyersLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentBuyersLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
