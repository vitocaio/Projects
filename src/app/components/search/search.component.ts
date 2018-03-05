import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  constructor() { }

  /*
    Emite um evento passando o valor digitado no search
  */

  @Output() game:EventEmitter<string> = new EventEmitter();

  onKey(event:any):void {
    if(event.target.value !== ""){
      this.game.emit(event.target.value);
    }
  }

  ngOnInit() {
  }

}
