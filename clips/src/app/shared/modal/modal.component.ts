import { Component, Input } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
  // providers: [ModalService]
})
export class ModalComponent {
  @Input() modalId = ""

  constructor (public modal: ModalService) {

  }

  closeModal () {
    this.modal.toggleModal(this.modalId)
  }

}
