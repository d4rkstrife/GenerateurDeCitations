// Différentes parties de phrase.
const data = {
    debutPhrase: ["Il ne faut jamais", "Pourquoi", "On peut toujours", "Il faut être prêt à", "On adore", "On préfère éviter de"],
    milieuPhrase: ["tuer un ours", "courir après une pierre", "lacher une caisse", "s'endormir", "marcher à pieds joints"],
    finPhrase: ["quand on court.", "face au vent.", "quand on a bu.", "à l'aveugle.", "par inadvertance.", "quand on ne s'y attend pas.", "sans le vouloir.", "sans faire attention."]
}
//Chiffre aléatoire pour choisir la phrase
let chiffreAleatoire = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
}
// Bouton Reset
let resetButton = document.getElementById("reset");

let reset = () => {
    let elt = document.getElementById("citation-container");
    while (elt.firstChild) {
        elt.removeChild(elt.firstChild);
    }
};
resetButton.addEventListener('click', reset);

// Class Phrase et son constructor
class Phrase {
    constructor(debutPhrase, milieuPhrase, finPhrase) {
        this.debutPhrase = debutPhrase;
        this.milieuPhrase = milieuPhrase;
        this.finPhrase = finPhrase;
    }
    fairePhrase = () => {
        return `${this.debutPhrase} ${this.milieuPhrase} ${this.finPhrase}`
    }
}

// Bouton qui génère la phrase
let button = document.getElementById("button");
button.addEventListener('click', generate = () => {
    reset(); //On efface les anciennes phrases si il y en a.
    let phrase = new Phrase(data.debutPhrase[chiffreAleatoire(data.debutPhrase.length)],
        data.milieuPhrase[chiffreAleatoire(data.milieuPhrase.length)],
        data.finPhrase[chiffreAleatoire(data.finPhrase.length)]);//La phrase est créée

    const newElt = document.createElement("p");
    let elt = document.getElementById("citation-container");
    elt.appendChild(newElt);
    newElt.textContent = phrase.fairePhrase();//Le nouvel element est rajouté à la div
});

//version1