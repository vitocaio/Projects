import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { SearchComponent } from './components/search/search.component';
import { FilterComponent } from './components/filter/filter.component';
import { DetailsComponent } from './components/details/details.component';
import { appRoutings } from './app.routing';
import { GamesComponent } from './components/games/games.component';
import { GameStore } from './game-store/game-store';
import { GamesService } from './services/game-services/games.service';
import { OrderByPipe } from './pipes/order-by-pipe.pipe';

@NgModule({ 
  declarations: [
    AppComponent,
    ListComponent,
    SearchComponent,
    FilterComponent,
    DetailsComponent,
    GamesComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    appRoutings
  ],
  providers: [
    GameStore, 
    GamesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
