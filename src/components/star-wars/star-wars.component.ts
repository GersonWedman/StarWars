import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.css']
})
export class StarWarsComponent {

@Input() nome: string = '';

}