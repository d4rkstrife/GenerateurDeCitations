const data = [
    [
        ["Il ne faut jamais", "Il faut", "On peut toujours", "Il faut être prêt à", "On adore", "On préfère éviter de"],
        ["tuer un ours", "courir après une pierre", "laver son linge", "s'endormir", "marcher à pieds joints"],
        ["quand on court.", "face au vent.", "quand on a bu.", "à l'aveugle.", "par inadvertance.", "quand on ne s'y attend pas.", "sans le vouloir.", "sans faire attention."]
    ],
    [
        ["Tintin", "Le capitaine Haddock", "Titeuf", "Asterix", "Lucky Luke"],
        ["court après", "mange", "tape sur", "tire plus vite qu'", "crie sur"],
        ["un sanglier.", "une banane.", "un romain.", "un poisson.", "une ombre.", "un nuage.", "un menhir."]
    ]
];
const citation = new Citation(data)
const app = new App(data, "button", "citation-container", "type", "nombre", citation);

app.run();