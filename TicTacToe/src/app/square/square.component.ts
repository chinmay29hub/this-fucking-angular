import { Component, Input, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule } from '@nebular/theme';
import { SharedVariableService } from '../services/shared-variable.service';


@Component({
  selector: 'app-square',
  standalone: true,
  imports: [CommonModule, NbButtonModule],
  templateUrl: "./square.component.html",
  styleUrl: "./square.component.scss"
})
export class SquareComponent {
  @Input() value!: 'X' | 'O';
  constructor (private shared : SharedVariableService) {

  }

  isDisabled : boolean = this.shared.isDisabled


}
