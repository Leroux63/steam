import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SteamApiComponent } from './steam-api/steam-api.component';
import { GameIndexComponent } from './game-index/game-index.component';
const routes: Routes = [
  { path: 'steam', component: SteamApiComponent},
  { path: 'gameIndex', component: GameIndexComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
