
import { Component } from '@angular/core';
import { IonContent, IonInput, IonButton,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';
import { CepService } from './cep.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [FormsModule ,IonContent, IonInput, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle],
})
export class Tab1Page {
  cep: string = '';
  endereco: any;
  constructor(private cepService: CepService) {}

  show: boolean = false;

  toggleShow() {
    if (this.cep.length === 8) {
      this.cepService.buscarCep(this.cep).subscribe(
        (data) => this.endereco = data,
        (error) => console.error('Erro ao buscar CEP', error)
      );
    }
    this.show = !this.show;
    console.log(this.show)
  }
}
