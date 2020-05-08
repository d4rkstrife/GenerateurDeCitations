class Citation {
    constructor(data, idButton, idElt, idCitation) {
        this.data = data;

        //  this.nbrCitation = document.querySelector('input[name = "nombre"]:checked');
        this.elt = document.getElementById(idElt);
        this.typeCitation = document.getElementById(idCitation);
        const button = document.getElementById(idButton);
        button.addEventListener('click', () => {
            this.generer();
        });
    }
    chiffreAleatoire(max) {
        return Math.floor(Math.random() * max)
    }
    generer() {
        let phrase = `${this.selAlea(this.selType())}`
        this.elt.textContent = phrase;
    }
    selectionAleatoire(partiePhrase) {
        return partiePhrase[this.chiffreAleatoire(partiePhrase.length)];
    }
    selAlea(type) {
        return type.debutPhrase[this.chiffreAleatoire(type.debutPhrase.length)] + " " + type.milieuPhrase[this.chiffreAleatoire(type.milieuPhrase.length)] + " " + type.finPhrase[this.chiffreAleatoire(type.finPhrase.length)];
    }
    selType() {
        let x = this.typeCitation.value;
        if (x === "phrase1") {
            return this.data.phrase1;
        } else {
            return this.data.phrase2;
        }

    }


}
const data = {
    phrase1: {
        debutPhrase: ["Il ne faut jamais", "Pourquoi", "On peut toujours", "Il faut être prêt à", "On adore", "On préfère éviter de"],
        milieuPhrase: ["tuer un ours", "courir après une pierre", "lacher une caisse", "s'endormir", "marcher à pieds joints"],
        finPhrase: ["quand on court.", "face au vent.", "quand on a bu.", "à l'aveugle.", "par inadvertance.", "quand on ne s'y attend pas.", "sans le vouloir.", "sans faire attention."]
    },
    phrase2: {
        debutPhrase: ["Tintin", "Le capitaine Haddock", "Titeuf", "Asterix", "Lucky Luke"],
        milieuPhrase: ["court après", "mange", "tape sur", "tire plus vite qu'", "crie sur"],
        finPhrase: ["un sanglier.", "une banane.", "un romain.", "un poisson.", "une ombre.", "un nuage.", "un menhir."]
    }
};
let citation = new Citation(data, "button", "citation-container", "type");