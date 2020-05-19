class App {
    constructor(idGenerer, idDivContainer, idEltType, citation) {

        this.citation = citation;
        this.elt = document.getElementById(idDivContainer);
        this.typeCitation = document.getElementById(idEltType);
        this.button = document.getElementById(idGenerer);
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
        return document.querySelector('input[name=nombre]:checked').value;

    }
    selType() {     //fonction qui récupère le type de citations à afficher
        return parseInt(this.typeCitation.value);

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
