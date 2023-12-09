import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { WorldComponent } from './world/world.component';
import { CommonLayoutComponent } from './shared/components/common-layout/common-layout.component';
import { IndiaComponent } from './india/india.component';
import { BusinessComponent } from './business/business.component';
import { TechnologyComponent } from './technology/technology.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { SportsComponent } from './sports/sports.component';
import { ScienceComponent } from './science/science.component';
import { HealthComponent } from './health/health.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'world', component: WorldComponent },
  { path: 'common', component: CommonLayoutComponent },
  { path: 'india', component: IndiaComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'technology', component: TechnologyComponent },
  { path: 'entertainment', component: EntertainmentComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'science', component: ScienceComponent },
  { path: 'health', component: HealthComponent },
  { path: 'spinner', component: SpinnerComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
