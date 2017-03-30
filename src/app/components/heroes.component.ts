import {Component} from '@angular/core';
import {Hero} from '../classes/hero';
import {HeroService} from '../services/hero.service';
import {OnInit} from '@angular/core';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/templates/heroes.component.html',
    styleUrls: ['app/css/heroes-component.css'],
})


export class HeroesComponent implements OnInit {
    constructor(private heroService: HeroService) {}
    selectedHero: Hero;
    heroes: Hero[];

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

}


