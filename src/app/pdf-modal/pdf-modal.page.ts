import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pdf-modal',
  templateUrl: './pdf-modal.page.html',
  styleUrls: ['./pdf-modal.page.scss'],
})
export class PdfModalPage {

  @Input() id!: number;
  @Input() nome!: string;

  constructor(private modalController: ModalController) {}

  fecharModal() {
    this.modalController.dismiss();
  }

  enviarDados() {
    this.modalController.dismiss(this.id, this.nome);
  }

}
