import { Component } from '@angular/core';
import { IonicModule, ToastController, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ModalDetalleComponent } from './modals/modal-detalle/modal-detalle.component';
import { ModalEditarComponent } from './modals/modal-editar/modal-editar.component';
import { ModalConfirmarComponent } from './modals/modal-confirmar/modal-confirmar.component';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink],
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {

  nombre: string = '';
  telefono: string = '';
  correo: string = '';

  constructor(
    private toastController: ToastController,
    private modalCtrl: ModalController
  ) {}

  // modales

  async abrirModalDetalle() {
    const modal = await this.modalCtrl.create({
      component: ModalDetalleComponent,
      componentProps: {
        usuario: {
          nombre: this.nombre || 'Christian Rojas',
          telefono: this.telefono || '0989443282',
          correo: this.correo || 'andres@example.com',
        },
      },
    });
    await modal.present();
  }

  async abrirModalEditar() {
    const modal = await this.modalCtrl.create({
      component: ModalEditarComponent,
      componentProps: {
        usuario: {
          nombre: this.nombre,
          telefono: this.telefono,
          correo: this.correo,
        },
      },
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      this.nombre = data.nombre;
      this.telefono = data.telefono;
      this.correo = data.correo;
    }
  }

  async abrirModalConfirmar() {
    const modal = await this.modalCtrl.create({
      component: ModalConfirmarComponent,
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data?.confirmado) {
      const toast = await this.toastController.create({
        message: 'perfecto esta pepa ',
        duration: 2000,
        color: 'medium',
      });
      await toast.present();
      this.limpiarCampos();
    }
  }


  async guardarCambios() {
    if (!this.nombre || !this.correo) {
      const toast = await this.toastController.create({
        message: 'Por favor complete los datos no me haga enojar ',
        duration: 2500,
        color: 'warning',
      });
      await toast.present();
      return;
    }

    const toast = await this.toastController.create({
      message: 'se guardo todo todito',
      duration: 2000,
      color: 'success',
    });
    await toast.present();
  }

  limpiarCampos() {
    this.nombre = '';
    this.telefono = '';
    this.correo = '';
  }
}
