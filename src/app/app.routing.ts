import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './components/details/details.component'
import { GamesComponent } from './components/games/games.component';

export const appRoutes: Routes = [
    //home
    { path: '', component: GamesComponent },
    { path: 'game/:slug', component: DetailsComponent}

]

export const appRoutings: ModuleWithProviders = RouterModule.forRoot(appRoutes);
