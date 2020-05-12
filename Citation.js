class Citation {
    constructor(data) {
        this.data = data;
    }

    chiffreAleatoire(max) {             //fonction qui crée un chiffre aléatoire
        return Math.floor(Math.random() * max)
    }

    construPhrase(nombre) {
        //    fonction qui met la phrase bout à bout
        let dataPhrase = this.data[nombre];
        let nbrPartPhrase = dataPhrase.length; // récupère le nbr de bout de phras qui existe
        let phrase = "";

        for (let i = 0; i < nbrPartPhrase; i++) { //boucle qui assemble les bouts de phrase.
            phrase = phrase + " " + dataPhrase[i][this.chiffreAleatoire(dataPhrase[i].length)];

        }
        return phrase

    }
}
