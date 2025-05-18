import { Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { PlayGameComponent } from './play/play-game/play-game.component';

export const routes: Routes = [
    { path: "", component: HomePageComponent},
    { path: "play", component: PlayGameComponent},
];
