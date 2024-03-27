import { Component, Input, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
  // providers: [ModalService]
})
export class ModalComponent implements OnInit {
  @Input() modalId = ""

  constructor (public modal: ModalService, public el : ElementRef, private renderer: Renderer2) {

  }

  ngOnInit(): void {
    // document.body.appendChild(this.el.nativeElement)
    if (typeof document !== 'undefined') {
      this.renderer.appendChild(document.body, this.el.nativeElement);
    }
  }

  closeModal () {
    this.modal.toggleModal(this.modalId)
  }

}
