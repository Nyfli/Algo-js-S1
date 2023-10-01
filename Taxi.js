class music_lover{
    constructor(nom, sanity, taxi){
        this.nom = nom
        this.sanity = sanity
        this.taxi = taxi
    }


    Choix_music(choix){
        const random = Math.floor(Math.random() * Music.length);
        if ( random === 0){
            this.sanity -= 1;
            this.taxi += 1
            console.log("John à écouté Anissa de Wejdene, il a donc perdue 1 de santée mentale, il lui reste", this.sanity, "il change donc de taxi"+"("+this.taxi+")")
        }
        else {
            fire -= 1
            console.log("John à écouté", Music[random] , "il conserve donc sa santée mentale", this.sanity, "et ne change pas de taxi.")
        }
    }

}

fire = 30
let John = new music_lover("John", 10,0);
    
let Music = ['Anissa Wejdene', 'Lacrimosa Mozart', 'Guerrier Doigby', 'Dreamland Kirby', 'Marie Johnny'];

while (John.sanity > 0, fire > 0){
    John.Choix_music()
    if (John.sanity <= 0){
        console.log("John à sombré a la folie");
        break;
    }
    if (fire <= 0){
        console.log("John est arrivé a destination");
        break;
    }

}

