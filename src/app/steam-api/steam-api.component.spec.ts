import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteamApiComponent } from './steam-api.component';

describe('SteamApiComponent', () => {
  let component: SteamApiComponent;
  let fixture: ComponentFixture<SteamApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SteamApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SteamApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
