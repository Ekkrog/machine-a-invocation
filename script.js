const formulaire = document.getElementById("formulaire");
const resultat = document.getElementById("resultat")
const invocation = document.getElementById("invocation")
const btnInvok = document.getElementById("btnInvok")
const message = document.getElementById("message")
const recommencer = document.getElementById("recommencer")
const creature = document.getElementById("creature")
const creatImage = document.getElementById("creatImage")

// Étape 3 — Réagir au clic (rappel événements)

// Direction script.js.

//     Récupère le formulaire avec getElementById).
//     Ajoute-lui un addEventListener.
//     Dans la fonction, commence toujours par event.preventDefault() ! Sinon la page se recharge et ta créature s'évapore.
//     Vérifie avec un console.log('clic !'), puis regarde la console.


// Étape 4 — Invoquer la créature (rappel DOM)

// Le cœur du kata. Toujours dans la fonction de soumission :

//     const prenom = document.getElementById('prenom').value
//     const creature = document.getElementById('creature').value
//     Construis un message, par exemple : `${prenom}, ${creature} a entendu ton appel et te suivra tout le Bloc 1 !`
//     Affiche-le dans le <p id="message"> avec textContent.
//     Cache le formulaire : document.getElementById('invocation').classList.add('cache')
//     Affiche le résultat : document.getElementById('resultat').classList.remove('cache')

const creaturesData = [
    {
        nom: "🐙 Chat-Octo",
        image: "chat-octo.png",
        description:"Te permet de chatter 8 fois plus vite"
    },
    {
        nom: "🐉 Dragon-Debug",
        image: "dragon-debug.png",
        description:"Brûle toutes les erreurs de ta console"
    },
    {
        nom: "🦄 Licorne-CSS",
        image: "licorne-css.png",
        description: "Donne de la couleur à ton code"
    },
    {
        nom: "🦊 Renard-Refacto",
        image: "renard-refacto.png",
        description: "Use de sa ruse pour optimiser ton code"
    },

    {
        nom : "🔮 God-Fémy",
        image : "dev-fou-esoterique.png",
        description : "Trouve les erreurs dans les énoncés. Est aussi a l'origine de Claude"
    },
];

btnInvok.addEventListener("click", () => {
    event.preventDefault();

    const prenom   = document.getElementById('prenom').value
    const creature = document.getElementById('creature').value

    if (prenom.length > 0 && creature !== "Choisir un familier" ) {
        const creatureTrouvee = creaturesData.find(c => c.nom === creature)
        message.textContent = `${prenom}, ${creatureTrouvee.nom}, ${creatureTrouvee.description}`
    
    if (creatureTrouvee) {
        creatImage.src = creatureTrouvee.image;
    }
        invocation.classList.add('cache')
        resultat.classList.remove('cache')
        
    }  else {
        alert("Dumbass ! Choose a name and a creature before clicking on invokate");
    }
});


// [Bonus] Étape 5 — Renvoyer la créature

// Optionnelle. Pour refaire une invocation sans recharger la page :

//     Dans la <section id="resultat">, ajoute un <button> avec l'id recommencer (texte : "Renvoyer la créature").
//     Donne-lui un addEventListener.
//     Dans la fonction, fais l'inverse de l'étape 4 : réaffiche le formulaire, recache le résultat.

recommencer.addEventListener("click", () => {
    resultat.classList.add('cache')
    invocation.classList.remove('cache')
})