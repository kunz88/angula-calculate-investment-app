import {
  Component,
  inject,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  investmentService = inject(InvestmentService);

  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpetedReturn = signal('5');
  enteredDuration = signal('10');

  OnSubmit() {
    this.investmentService.calculateInvestment({
      initialInvestment: +this.enteredInitialInvestment(),
      annualInvestment: +this.enteredAnnualInvestment(),
      expectedReturn: +this.enteredExpetedReturn(),
      duration: +this.enteredDuration(),
    });
    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpetedReturn.set('5');
    this.enteredDuration.set('10');
  }
}
