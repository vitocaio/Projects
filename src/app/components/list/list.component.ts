import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    @Input() gamesList; // lista de jogos recuperada do repositorio
    @Input() filter; // filtro para ordenacao da lista
    @Input() notfind; // caso n exista nada no array de games 
    
    constructor() { }

    ngOnInit(): void {
      
    }

}