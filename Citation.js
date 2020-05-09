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
    chiffreAleatoire(max) {             //fonction qui crée un chiffre aléatoire
        return Math.floor(Math.random() * max)
    }
    generer() {
        this.reset();   // on efface les phrases précédents
        for (let i = 0; i < this.choixNbr(); i++) { //boucle sur le nombre choisi   
            let phrase = `${this.construPhrase()}`
            this.creerElt(phrase)
        }
    }
    construPhrase() {       //fonction qui met la phrase bout à bout
        let x = this.data[this.selType()].length; //récupère le nombre de bout de phrase qui existe
        let phrase = ""
        for (let i = 0; i < x; i++) { //boucle qui assemble les bouts de phrase.
            phrase = phrase + " " + this.data[this.selType()][i][this.chiffreAleatoire(this.data[this.selType()][i].length)];
        }
        return phrase;
    }
    selType() {     //fonction qui récupère le type de citations à afficher
        let x = eval(this.typeCitation.value);
        return x
    }
    choixNbr() {    //fonction qui récupère le nombre de citations à afficher
        for (var i = 0; i < this.radio.length; i++) {
            if (this.radio[i].checked) {
                this.nbrCitation = this.radio[i].value;
            }
        }
        return this.nbrCitation
    }
    creerElt(phrase) {  //crée un element p dans la div choisie.
        let newElt = document.createElement("p");
        newElt.className = "citation";
        this.elt.appendChild(newElt);
        newElt.textContent = phrase;
    }
    reset() {       //efface les elements affichés lors du générer précedent.
        while (this.elt.firstChild) {
            this.elt.removeChild(this.elt.firstChild);
        }
    }

}
const data = [
    [
        ["Il ne faut jamais", "Pourquoi", "On peut toujours", "Il faut être prêt à", "On adore", "On préfère éviter de"],
        ["tuer un ours", "courir après une pierre", "lacher une caisse", "s'endormir", "marcher à pieds joints"],
        ["quand on court.", "face au vent.", "quand on a bu.", "à l'aveugle.", "par inadvertance.", "quand on ne s'y attend pas.", "sans le vouloir.", "sans faire attention."]
    ],
    [
        ["Tintin", "Le capitaine Haddock", "Titeuf", "Asterix", "Lucky Luke"],
        ["court après", "mange", "tape sur", "tire plus vite qu'", "crie sur"],
        ["un sanglier.", "une banane.", "un romain.", "un poisson.", "une ombre.", "un nuage.", "un menhir."]
    ]
];

let citation = new Citation(data, "button", "citation-container", "type", "nombre");