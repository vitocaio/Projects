import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }
  @Output() viewers:EventEmitter<any> = new EventEmitter();
  @Output() popularity:EventEmitter<any> = new EventEmitter();

  // esses metodos enviam um parametro para a lista com o valor do filtro
  onViewer():void {
    this.viewers.emit("-viewers");
  }

  onPopularity():void {
    this.popularity.emit("-popularity");
  }

  ngOnInit() {
  }

}
