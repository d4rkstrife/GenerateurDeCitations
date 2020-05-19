class Citation {
    constructor(data) {
        this.data = data;
    }

    chiffreAleatoire(max) {             //fonction qui crée un chiffre aléatoire
        return Math.floor(Math.random() * max);
    }

    construPhrase(nombre) {
        //    fonction qui met la phrase bout à bout
        const dataPhrase = this.data[nombre];
        let phrase = "";

        dataPhrase.forEach(element => {
            phrase = phrase + " " + element[this.chiffreAleatoire(element.length)];
        })
        return phrase;

    }
}
