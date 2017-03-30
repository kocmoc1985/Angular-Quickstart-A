import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'; // <-- NgModel lives here

import {AppComponent} from './components/app.component';
import {HeroDetailComponent} from './components/hero-detail.component';
import {HeroesComponent} from './components/heroes.component';
import {DashboardComponent} from './components/dashboard.component';
import {HeroService} from './services/hero.service'

import {AppRoutingModule} from './app-routing.module';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
        AppRoutingModule
    ],
    declarations: [ // this one is needed to recognize the "tags" <my-app></my-app>,<my-heroes></>, etc.  
        AppComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent
    ],
    providers: [HeroService]
    ,
    bootstrap: [AppComponent]
})
export class AppModule {}

//
