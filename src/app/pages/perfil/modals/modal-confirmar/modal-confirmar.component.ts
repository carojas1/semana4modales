import { Component } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-confirmar',
  standalone: true,
  imports: [IonicModule, CommonModule], 
  templateUrl: './modal-confirmar.component.html',
  styleUrls: ['./modal-confirmar.component.scss'],
})
export class ModalConfirmarComponent {
  constructor(private modalCtrl: ModalController) {}

  confirmar() {
    this.modalCtrl.dismiss({ confirmado: true });
  }

  cancelar() {
    this.modalCtrl.dismiss({ confirmado: false });
  }
}
