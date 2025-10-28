import { Component, Input } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';

interface Usuario {
  nombre: string;
  correo: string;
  rol?: string;
  estado?: string;
  nivel?: string;
  miembroDesde?: string;
  ubicacion?: string;
  progreso?: number; 
}

@Component({
  selector: 'app-modal-detalle',
  templateUrl: './modal-detalle.component.html',
  styleUrls: ['./modal-detalle.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class ModalDetalleComponent {
  @Input() usuario?: Partial<Usuario>;

  constructor(private modalCtrl: ModalController) {}
  cerrar() {
    this.modalCtrl.dismiss(null, 'close');
  }
  editar() {
    this.modalCtrl.dismiss({ action: 'edit' }, 'edit');
  }

  abrirModalEditar() { this.editar(); }
  get nombre(): string {
    return this.usuario?.nombre ?? 'Christina Rojas';
  }

  get correo(): string {
    return this.usuario?.correo ?? 'christina.rojas@example.com';
  }

  get progreso(): number {
    const v = this.usuario?.progreso;
    return typeof v === 'number' ? Math.max(0, Math.min(1, v)) : 0.7;
  }

  get rol(): string { return this.usuario?.rol ?? 'Desarrolladora'; }
  get estado(): string { return this.usuario?.estado ?? 'Activa'; }
  get nivel(): string { return this.usuario?.nivel ?? 'Avanzado'; }
  get miembroDesde(): string { return this.usuario?.miembroDesde ?? 'Marzo 2024'; }
  get ubicacion(): string { return this.usuario?.ubicacion ?? 'Ecuador'; }
}
