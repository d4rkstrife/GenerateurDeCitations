class Citation {
    constructor(data, idButton, idElt, idCitation, idNombre) {
        this.data = data;
        this.radio = document.getElementsByName(idNombre);
        this.nbrCitation;
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
        this.reset();
        for (let i = 0; i < this.choixNbr(); i++) {
            let phrase = `${this.selAlea(this.selType())}`
            this.creerElt(phrase)
        }
        console.log(this.choixNbr())
    }
    selAlea(type) {
        return type.debutPhrase[this.chiffreAleatoire(type.debutPhrase.length)] + " " + type.milieuPhrase[this.chiffreAleatoire(type.milieuPhrase.length)] + " " + type.finPhrase[this.chiffreAleatoire(type.finPhrase.length)];
    }
    selType() {
        let x = eval("this.data." + this.typeCitation.value);
        return x
    }
    choixNbr() {
        for (var i = 0; i < this.radio.length; i++) {
            if (this.radio[i].checked) {
                this.nbrCitation = this.radio[i].value;
            }
        }
        return this.nbrCitation
    }
    creerElt(phrase) {
        let newElt = document.createElement("p");
        newElt.className = "citation";
        this.elt.appendChild(newElt);
        newElt.textContent = phrase;
    }
    reset() {
        while (this.elt.firstChild) {
            this.elt.removeChild(this.elt.firstChild);
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
let citation = new Citation(data, "button", "citation-container", "type", "nombre");