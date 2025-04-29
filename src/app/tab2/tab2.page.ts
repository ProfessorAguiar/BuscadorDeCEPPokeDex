
import { Component } from '@angular/core';
import { IonContent, IonGrid, IonCol, IonRow, IonInput, IonButton,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';
import { POKEMONService } from './POKEMON.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [FormsModule, IonGrid,IonCol, IonRow ,IonContent, IonInput, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle],
})
export class Tab2Page {
  POKEMON: string = '';
  poke: any;
  gifAnimada:any;
  pokemons: any[] = [];
  ids: number[] = Array.from({ length: 10 }, (_, i) => i + 1); 

  constructor(private POKEMONService: POKEMONService) {}
  ngOnInit() {
    this.carregarPokemons();
  }

  show: boolean = false;

  toggleShow() {
    if (this.POKEMON) {
      this.POKEMONService.buscarPOKEMON(this.POKEMON).subscribe(
        (data) =>{ 
          this.poke = data
          this.gifAnimada = this.poke.sprites.versions["generation-v"]["black-white"].animated.front_default;          console.log(this.poke)
        },
        (error) => console.error('Erro ao buscar POKEMON', error)
      );
    }
    this.show = !this.show;
    console.log(this.show)
  }

  carregarPokemons() {
    this.ids.forEach(id => {
      this.POKEMONService.buscarPOKEMON(id.toString()).subscribe(
        (data) => {
          const gifAnimada = data.sprites.versions["generation-v"]["black-white"].animated.front_default;
          this.pokemons.push({
            nome: data.name,
            imagem: gifAnimada,
            id: data.id
          });
          console.log('Adicionado:', data.name);
        },
        (error) => console.error('Erro ao buscar POKEMON', error)
      );
    });
    console.log('Pokémons carregados:', this.pokemons);
  }
  

}
