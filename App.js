class App {
    constructor(data, idButton, idElt, idCitation, idNombre, citation) {
        this.data = data;
        this.citation = citation
        this.radio = document.getElementsByName(idNombre);
        this.nbrCitation;
        this.elt = document.getElementById(idElt);
        this.typeCitation = document.getElementById(idCitation);
        this.button = document.getElementById(idButton);
    }
    run() {
        this.button.addEventListener('click', () => {
            this.reset();

            for (let i = 0; i < this.choixNbr(); i++) { // boucle sur le nombre choisi
                this.creerElt(this.citation.construPhrase(this.selType()));
            }
        });

    }
    choixNbr() {    //fonction qui récupère le nombre de citations à afficher
        this.nbrCitation = document.querySelector('input[name=nombre]:checked').value;
        return this.nbrCitation
    }
    selType() {     //fonction qui récupère le type de citations à afficher
        let typePhrase = parseInt(this.typeCitation.value);
        return typePhrase
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
