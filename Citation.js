class Citation {
    constructor(data, idButton, idElt, typeCitation, nbrCitation) {
        this.debutPhrase = data.debutPhrase;
        this.milieuPhrase = data.milieuPhrase;
        this.finPhrase = data.finPhrase;
        this.elt = document.getElementById(idElt);
        const button = document.getElementById(idButton);
        button.addEventListener('click', () => {
            this.generer();
        });
    }
    chiffreAleatoire(max) {
        return Math.floor(Math.random() * max)
    }
    generer() {
        let phrase = `${this.selectionAleatoire(this.debutPhrase)} ${this.selectionAleatoire(this.milieuPhrase)} ${this.selectionAleatoire(this.finPhrase)}`
        this.elt.textContent = phrase;
    }
    selectionAleatoire(partiePhrase) {
        return partiePhrase[this.chiffreAleatoire(partiePhrase.length)];
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
let citation = new Citation(data, "button", "citation-container");