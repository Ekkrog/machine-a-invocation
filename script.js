const formulaire = document.getElementById("formulaire");
const resultat = document.getElementById("resultat")
const invocation = document.getElementById("invocation")
const btnInvok = document.getElementById("btnInvok")
const message = document.getElementById("message")
const recommencer = document.getElementById("recommencer")
const creature = document.getElementById("creature")
const creatImage = document.getElementById("creatImage")


// Tableau des créatures // 

const creaturesData = [
    {
        nom: "🐉 Dragon-Debug",
        image: "./images/dragon.png",
        description: "invoque le Feu Noir pour carboniser toutes les erreurs de ta console"
    },
    {
        nom: "🦊 Renard-Refacto",
        image: "./images/renard.png",
        description: "discerne et optimise les chemins cachés de ton code pour le rendre pur comme l'or"
    },
    {
        nom: "😼 Chat-Octo",
        image: "./images/kraken.png",
        description: "né des profondeurs pour manipuler les océans de pixels de ton design"
    },
    {
        nom: "🦄 Licorne-CSS",
        image: "./images/licorne.png",
        description: "illumine ton code de sa crinière luisante et son pelage ancestral"
    },

    {
        nom : "🔮 God-Fémy",
        image : "./images/dev-fou-esoterique.png",
        description : "trouve les erreurs dans les énoncés. Est aussi a l'origine de Claude"
    },
];

// Étape 3 — Réagir au clic (rappel événements)

btnInvok.addEventListener("click", () => {
    event.preventDefault();

    const prenom   = document.getElementById('prenom').value
    const creature = document.getElementById('creature').value

// Étape 4 — Invoquer la créature (rappel DOM)

    if (prenom.length > 0 && creature !== "Choisir un familier" ) {
        const creatureTrouvee = creaturesData.find(c => c.nom === creature)
        message.textContent = `${prenom}, ${creatureTrouvee.nom}, ${creatureTrouvee.description}`
    
    if (creatureTrouvee) {
        creatImage.src = creatureTrouvee.image;
    }
        formulaire.classList.add('cache')
        resultat.classList.remove('cache')
        
    }  else {
        alert("Dumbass ! Choose a name and a creature before clicking on invokate");
    }
});

// [Bonus] Étape 5 — Renvoyer la créature

recommencer.addEventListener("click", () => {
    resultat.classList.add('cache')
    formulaire.classList.remove('cache')
})