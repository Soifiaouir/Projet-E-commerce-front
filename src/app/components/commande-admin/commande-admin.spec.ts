import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeAdmin } from './commande-admin';

describe('CommandeAdmin', () => {
  let component: CommandeAdmin;
  let fixture: ComponentFixture<CommandeAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommandeAdmin],
    }).compileComponents();

    fixture = TestBed.createComponent(CommandeAdmin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
