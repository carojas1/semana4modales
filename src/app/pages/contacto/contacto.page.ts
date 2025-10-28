import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonLabel, IonItem, IonTextarea, IonInput, IonCardTitle, IonCardContent, IonCardHeader, IonCard } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonInput, IonTextarea, IonItem, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButton,RouterModule]
})

export class ContactoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
