
## Documentation du Système de Simulation de Population
### Vue d'ensemble
Ce code implémente un système de simulation de population avec des individus, des facteurs de sélection, et des événements aléatoires qui affectent la viabilité des individus.

### 1. Classe Individu : 
Représente un individu dans la population.

#### Propriétés :
- genome: Une chaîne représentant le génome de l'individu.
- viable: Un booléen indiquant si l'individu est viable.
#### Méthodes : 

- constructor(genome: String): Initialise un nouvel individu avec le génome donné.
- Tuer(): Marque l'individu comme non viable.
- get Genome(): Retourne le génome de l'individu.
- Viable(): Vérifie la viabilité de l'individu basée sur son génome.
### 2. Classe IndividuFactory :
Fabrique des individus et des populations.

#### Méthodes :
- getIndividu(): Crée et retourne un nouvel individu avec un génome aléatoire.
- getPopulation(n: number): Crée et retourne une population de n individus.
### 3. Classe Population
Gère une collection d'individus.
#### Propriétés : 
- population: Un tableau d'Individu.
#### Méthodes : 
- add(individu: Individu): Ajoute un individu à la population.
- selection(): Applique le processus de sélection à tous les individus.
- vivant(): Vérifie et affiche l'état de viabilité de chaque individu.
### 4. Classe Monstre :
Représente un événement qui peut transformer des individus non viables en monstres.
#### Méthodes
- select(individu: Individu): Tente de transformer un individu en monstre s'il n'est pas viable.
### 5. Classe RayonGamma :
- Simule l'effet d'un rayon gamma sur les individus.
#### Propriétés
- intensite: L'intensité du rayon gamma.
- couleur: La couleur du rayon gamma.
#### Méthodes
- select(individu: Individu): Applique l'effet du rayon gamma sur un individu.
### 6. Classe Catastrophe :
Simule une catastrophe qui peut affecter les individus.
#### Propriétés
- forme: Le type de catastrophe.
#### Méthodes
- select(individu: Individu): Applique l'effet de la catastrophe sur un individu.
### 7. Classe Selecteur :
Gère le processus de sélection en choisissant aléatoirement entre différents événements.
#### Méthodes
- select(individu: Individu): Applique un événement aléatoire (RayonGamma, Catastrophe, ou Monstre) à un individu.
## Utilisation
Le code se termine par la création d'une fabrique d'individus, la génération d'une population, et l'application du processus de sélection et de vérification de viabilité.
