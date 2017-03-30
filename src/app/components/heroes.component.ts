import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Hero} from '../classes/hero';
import {HeroService} from '../services/hero.service';


@Component({
    selector: 'my-heroes',
    templateUrl: 'app/templates/heroes.component.html',
    styleUrls: ['app/css/heroes-component.css'],
})


export class HeroesComponent implements OnInit {
    constructor(
        private heroService: HeroService,
        private router: Router
    ) {}

    selectedHero: Hero;
    heroes: Hero[];

    ngOnInit(): void {
        this.getHeroes();
    }

    add(name: string): void {
        name = name.trim();
        if (!name) {return;}
        this.heroService.create(name)
            .then(hero => {
                this.heroes.push(hero);
                this.selectedHero = null;
            });
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

}


