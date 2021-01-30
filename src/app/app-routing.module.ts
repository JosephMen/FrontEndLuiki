import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { JoinMatchComponent } from './components/join-match/join-match.component';
import {RaceMakerComponent} from './components/race-maker/race-maker.component'
import { EasyComponent } from './components/races/easy/easy.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'joinMatch', component: JoinMatchComponent},
  {path: 'raceMaker', component: RaceMakerComponent},
  {path: 'easyRace',component: EasyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


