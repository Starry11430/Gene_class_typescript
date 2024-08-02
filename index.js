"use strict";
var hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
class Individu {
    constructor(genome) {
        this.genome = genome;
        this.viable = true;
    }
    Tuer() {
        this.viable = false;
    }
    get Genome() {
        return this.genome;
    }
    Viable() {
        var hax_1 = this.genome.substring(1, 2);
        var hax_2 = this.genome.substring(2, 3);
        var hax_3 = this.genome.substring(3, 4);
        if (Number(this.genome.substring(0, 1)) > 2 || Number(this.genome.substring(0, 1)) < 0) {
            this.viable = false;
        }
        else if (hex[hex.indexOf(hax_1)] !== hax_1) {
            this.viable = false;
        }
        else if (hex[hex.indexOf(hax_2)] !== hax_2) {
            this.viable = false;
        }
        else if (hex[hex.indexOf(hax_3)] !== hax_3) {
            this.viable = false;
        }
        else {
            console.log('condition viable de humain : ' + this.genome);
        }
        if (this.viable = false) {
            this.Tuer();
        }
    }
}
class IndividuFactory {
    getIndividu() {
        var genome = hex[Math.floor(Math.random() * 2)] + hex[Math.floor(Math.random() * 15)] + hex[Math.floor(Math.random() * 15)] + hex[Math.floor(Math.random() * 15)];
        return new Individu(genome);
    }
    getPopulation(n) {
        const population = new Population();
        for (let i = 0; i <= n - 1; i++) {
            population.add(this.getIndividu());
        }
        return population;
    }
}
class Population {
    constructor() {
        this.population = [];
    }
    add(individu) {
        this.population.push(individu);
    }
    selection() {
        const selecteur = new Selecteur();
        for (let i = 0; i < this.population.length; i++) {
            selecteur.select(this.population[i]);
        }
    }
    vivant() {
        this.population.forEach(element => {
            if (element.viable === false) {
                element.Tuer();
                console.log("Individu " + element.Genome + " est mort");
            }
            else {
                console.log("Individu " + element.Genome + " n'est pas mort");
            }
        });
    }
}
class Monstre {
    constructor() {
        this.Population = [];
    }
    select(individu) {
        if (individu.viable === false) {
            console.log('humain ' + individu.Genome + ' se transforme en monstre');
            this.Population.push(individu);
        }
        else {
            console.log('humain ' + individu.Genome + ' est vivant et ne peux pas se transforme en monstre');
        }
    }
}
class RayonGamma {
    constructor() {
        this.intensite = Math.floor(Math.random() * 10);
        this.couleur = Math.floor(Math.random() * 3);
    }
    select(individu) {
        switch (this.couleur) {
            case 1:
                // rouge
                if (hex.indexOf(individu.Genome.substring(1, 2)) >= this.intensite) {
                    console.log('individu est mort du rayon gamma ' + this.intensite + " sur la couleur rouge");
                    individu.Tuer();
                }
                else {
                    console.log("individu n'est mort du rayon gamma " + this.intensite + " sur la couleur rouge");
                }
                break;
            case 2:
                // vert
                if (hex.indexOf(individu.Genome.substring(2, 3)) >= this.intensite) {
                    console.log('individu est mort du rayon gamma ' + this.intensite + " sur la couleur vert");
                    individu.Tuer();
                }
                else {
                    console.log("individu n'est mort du rayon gamma " + this.intensite + " sur la couleur vert");
                }
                break;
            case 3:
                // bleu
                if (hex.indexOf(individu.Genome.substring(3, 4)) >= this.intensite) {
                    console.log('individu  est mort du rayon gamma ' + this.intensite + " sur la couleur bleu");
                    individu.Tuer();
                }
                else {
                    console.log("individu n'est mort du rayon gamma " + this.intensite + " sur la couleur bleu");
                }
                break;
        }
    }
}
class Catastrophe {
    constructor() {
        this.forme = Math.floor(Math.random() * 2);
    }
    select(individu) {
        if (Number(hex[hex.indexOf(individu.genome.substring(0, 1))]) !== this.forme) {
            individu.Tuer();
            console.log('mort catastrophe');
        }
    }
}
class Selecteur {
    select(individu) {
        var malheur = Math.floor(Math.random() * 3);
        var cause;
        switch (malheur) {
            case 0:
                cause = new RayonGamma();
                cause.select(individu);
                break;
            case 1:
                cause = new Catastrophe();
                cause.select(individu);
                break;
            case 2:
                cause = new Monstre();
                cause.select(individu);
                break;
        }
    }
}
var indFacto = new IndividuFactory();
var individu = new Individu('2BEC');
var Cata = new Selecteur();
var popula = indFacto.getPopulation(5);
console.log(popula);
console.log(popula.selection());
console.log(popula.vivant());
console.log(popula);
