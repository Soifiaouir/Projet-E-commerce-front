import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeCheckout } from './commande-checkout';

describe('CommandeCheckout', () => {
  let component: CommandeCheckout;
  let fixture: ComponentFixture<CommandeCheckout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommandeCheckout],
    }).compileComponents();

    fixture = TestBed.createComponent(CommandeCheckout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
