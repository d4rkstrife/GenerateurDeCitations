// Différentes parties de phrase.
const data = {
    debutPhrase1: ["Il ne faut jamais", "Il ne faut pas s'interdire de", "On peut toujours", "Il faut être prêt à", "Il est préférable de", "On préfèrera toujours"],
    milieuPhrase1: ["tuer un ours", "courir après une pierre", "lacher une caisse", "s'endormir", "marcher à cloche pieds"],
    finPhrase1: ["quand on court.", "face au vent.", "quand on a bu.", "à l'aveugle.", "par inadvertance.", "quand on ne s'y attend pas.", "sans le vouloir.", "sans faire attention.", "même si ce n'est pas facile.", "même si il y a des conséquences."],
    debutPhrase2: ["Tintin", "Le capitaine Haddock", "Titeuf", "Asterix", "Lucky Luke"],
    milieuPhrase2: ["court après", "mange", "tape sur", "tire plus vite qu'", "crie sur"],
    finPhrase2: ["un sanglier.", "une banane.", "un romain.", "un poisson."]
}
//Chiffre aléatoire pour choisir la phrase
let chiffreAleatoire = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
}
// Fonction Reset
let resetButton = document.getElementById("reset");

let reset = () => {
    let elt = document.getElementById("citation-container");
    while (elt.firstChild) {
        elt.removeChild(elt.firstChild);
    }
    //raz des boutons
    button.style.display = "inline-block";
    button.textContent = "Version normale";
    button2.style.display = "inline-block";
    button2.textContent = "Dessin animé";
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
    //On recupère la valeur du Select pour definir le nombre de phrase a écrire
    let x = document.getElementById("number").value;
    reset(); //On efface les anciennes phrases si il y en a.
    //On boucle grace a la valeur du Select
    for (let i = 0; i < x; i++) {
        let phrase = new Phrase(data.debutPhrase1[chiffreAleatoire(data.debutPhrase1.length)],
            data.milieuPhrase1[chiffreAleatoire(data.milieuPhrase1.length)],
            data.finPhrase1[chiffreAleatoire(data.finPhrase1.length)]);//La phrase est créée

        const newElt = document.createElement("p");
        let elt = document.getElementById("citation-container");
        elt.appendChild(newElt);//Le nouvel element est rajouté à la div
        newElt.textContent = phrase.fairePhrase();//on lui donne la vleur de la phrase créée.
        newElt.className = "citation";
    }
    //mise à jour des boutons
    button2.style.display = "none";
    button.textContent = "Continuer";

});

let button2 = document.getElementById("button2");
button2.addEventListener('click', generate = () => {
    //On recupère la valeur du Select pour definir le nombre de phrase a écrire
    let x = document.getElementById("number").value;
    reset(); //On efface les anciennes phrases si il y en a.
    //On boucle grace a la valeur du Select
    for (let i = 0; i < x; i++) {
        let phrase = new Phrase(data.debutPhrase2[chiffreAleatoire(data.debutPhrase2.length)],
            data.milieuPhrase2[chiffreAleatoire(data.milieuPhrase2.length)],
            data.finPhrase2[chiffreAleatoire(data.finPhrase2.length)]);//La phrase est créée

        const newElt = document.createElement("p");
        let elt = document.getElementById("citation-container");
        elt.appendChild(newElt);//Le nouvel element est rajouté à la div
        newElt.textContent = phrase.fairePhrase();//on lui donne la vleur de la phrase créée.
        newElt.className = "citation";

    }
    //mise à jour des boutons
    button.style.display = "none";
    button2.textContent = "Continuer";

});

//version2.1

