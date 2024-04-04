import { Component, OnInit, OnDestroy, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import IClip from '../../models/clip.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClipService } from '../../services/clip.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit, OnDestroy, OnChanges {

  @Input() activeClip : IClip | null = null
  inSubmission = false
  showAlert = false
  alertColor = "blue"
  alertMsg = "Please Wait! Updating Clip."
  @Output() update = new EventEmitter()

  constructor(private modal : ModalService, private clipService : ClipService) {

  }

  clipID = new FormControl("")

  title = new FormControl("", [
    Validators.required,
    Validators.minLength(3)
  ])

  editForm = new FormGroup({
    title : this.title,
    id : this.clipID
  })

  ngOnInit(): void {
    this.modal.register("editClip")
  }

  ngOnDestroy(): void {
    this.modal.unregister("editClip")
  }

  ngOnChanges(): void {
    if (!this.activeClip) {
      return
    }

    this.inSubmission = false
    this.showAlert = false

    this.clipID.setValue(this.activeClip.docID as string)
    this.title.setValue(this.activeClip.title)
  }

  async submit () {

    if (!this.activeClip) {
      return
    }

    this.inSubmission = true
    this.showAlert = true
    this.alertColor = "blue"
    this.alertMsg = "Please Wait! Updating Clip."
    try {
      await this.clipService.updateClip(this.clipID.value as string, this.title.value as string)
    } catch (error) {
      this.inSubmission = false
      this.alertColor = "red"
      this.alertMsg = "Something Went Wrong! Please try again later"
      console.log(error)
      return
    }

    if (this.activeClip) {
      this.activeClip.title = this.title.value as string;
      this.update.emit(this.activeClip);
    }

    this.inSubmission = false
    this.alertColor = "green"
    this.alertMsg = "Success"
  }

}
