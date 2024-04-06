import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [],
  template : `Hello`
})
export class SquareComponent {
  @Input() value!: 'X' | 'O';
}
