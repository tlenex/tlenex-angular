import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExpositionComponent} from './exposition/exposition.component';
import {ExcitingGamesComponent} from './exciting-games/exciting-games.component';
import {ExpertiseComponent} from './expertise/expertise.component';
import {ExpertComponent} from './expert/expert.component';
import {ExplorationsComponent} from './explorations/explorations.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: 'ekspozycja',
        component: ExpositionComponent
    },
    {
        path: 'ekspertyza',
        component: ExpertiseComponent
    },
    {
        path: 'ekploracje',
        component: ExplorationsComponent
    },
    {
        path: 'ekscytujace-gry',
        component: ExcitingGamesComponent
    },
    {
        path: 'ekspert',
        component: ExpertComponent
    },
    {
        path: '',
        redirectTo: '/ekspozycja',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
