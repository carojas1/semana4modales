import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonLabel, IonList, IonCardContent, IonCardHeader, IonCard, IonCardTitle } from '@ionic/angular/standalone';

@Component({
 selector: 'app-inicio',
 standalone: true,
 imports: [IonCardTitle, IonCard, IonCardHeader, IonCardContent, IonList, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, RouterModule,FormsModule,CommonModule],
 templateUrl: './about.page.html',

 styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

 constructor() { }

 ngOnInit() {
}
}