
import { Component } from '@angular/core';
import { IonContent, IonInput, IonButton,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';
import { POKEMONService } from './POKEMON.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [FormsModule ,IonContent, IonInput, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle],
})
export class Tab2Page {
  POKEMON: string = '';
  poke: any;
  constructor(private POKEMONService: POKEMONService) {}

  show: boolean = false;

  toggleShow() {
    if (this.POKEMON) {
      this.POKEMONService.buscarPOKEMON(this.POKEMON).subscribe(
        (data) =>{ 
          this.poke = data
          console.log(this.poke)
        },
        (error) => console.error('Erro ao buscar POKEMON', error)
      );
    }
    this.show = !this.show;
    console.log(this.show)
  }
}
