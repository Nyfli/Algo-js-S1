class Pokemon {
    constructor(nom, attaque, defense, vie) {
        this.nom = nom;
        this.attaque = attaque;
        this.defense = defense;
        this.vie = vie;
    }

    attaquer(adversaire) {

        const degats = this.attaque - adversaire.defense;
        adversaire.vie -= degats;
    }
}

let carapuce = new Pokemon("Carapuce", 15, 8, 42);
let pikachu = new Pokemon("Pikachu", 20, 2, 35);


while (carapuce.vie > 0 , pikachu.vie > 0) {

    carapuce.attaquer(pikachu);
    console.log(carapuce.nom , " (" , carapuce.vie , " PV) attaque " , pikachu.nom , " (" , pikachu.vie , " PV).");

    if (pikachu.vie <= 0) {
        console.log(`${carapuce.nom} a gagné le combat !`);
        break;
    }


    pikachu.attaquer(carapuce);
    console.log(pikachu.nom , " (" , pikachu.vie , " PV) attaque " , carapuce.nom , " (" , carapuce.vie , " PV).");


    if (carapuce.vie <= 0) {
        console.log(`${pikachu.nom} a gagné le combat !`);
        break;
    }
}