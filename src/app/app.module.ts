import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'; // <-- NgModel lives here
import {RouterModule} from '@angular/router';

import {AppComponent} from './components/app.component';
import {HeroDetailComponent} from './components/hero-detail.component';
import {HeroesComponent} from './components/heroes.component';
import {HeroService} from './services/hero.service'



@NgModule({
    imports: [
        BrowserModule,
        FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
        RouterModule.forRoot([
            {
                path: 'heroes',
                component: HeroesComponent
            }
        ]),
    ],
    declarations: [ // this one is needed to recognize the "tags" <my-app></my-app>,<my-heroes></>, etc.  
        AppComponent,
        HeroDetailComponent,
        HeroesComponent
    ],
    providers: [HeroService]
    ,
    bootstrap: [AppComponent]
})
export class AppModule {}

//
