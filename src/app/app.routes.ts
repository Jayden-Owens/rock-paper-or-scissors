import { Routes } from '@angular/router';
import { MainGameComponent } from './main-game/main-game.component';
import { OpeningScreenComponent } from './opening-screen/opening-screen.component';


export const routes: Routes = [
    // Set up routes for 2 pages
    { path: 'game-type/single', component: MainGameComponent },
    { path: 'game-type/multi', component: MainGameComponent },
    { path: '', component: OpeningScreenComponent },
    { path: '**', redirectTo: '' },
];
