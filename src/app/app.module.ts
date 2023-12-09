import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './shared/components/card/card.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ScrollUpDirective } from './shared/directives/scroll-up.directive';
import { SideCardComponent } from './shared/components/side-card/side-card.component';
import { UnderlineDirective } from './shared/directives/underline/underline.directive';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { WorldComponent } from './world/world.component';
import { HorizontalSliderComponent } from './shared/components/horizontal-slider/horizontal-slider.component';
import { CommonLayoutComponent } from './shared/components/common-layout/common-layout.component';
import { IndiaComponent } from './india/india.component';
import { CategoryCardComponent } from './shared/components/category-card/category-card.component';
import { BusinessComponent } from './business/business.component';
import { TechnologyComponent } from './technology/technology.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { SportsComponent } from './sports/sports.component';
import { ScienceComponent } from './science/science.component';
import { HealthComponent } from './health/health.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { SourceCardComponent } from './shared/components/source-card/source-card.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { RandomSlicePipe } from './shared/pipe/random-slice.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    NavigationComponent,
    ScrollUpDirective,
    SideCardComponent,
    UnderlineDirective,
    NotFoundComponent,
    WorldComponent,
    HorizontalSliderComponent,
    CommonLayoutComponent,
    IndiaComponent,
    CategoryCardComponent,
    BusinessComponent,
    TechnologyComponent,
    EntertainmentComponent,
    SportsComponent,
    ScienceComponent,
    HealthComponent,
    SpinnerComponent,
    SourceCardComponent,
    SearchComponent,
    RandomSlicePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
