const formulaire = document.getElementById("formulaire");
const resultat = document.getElementById("resultat")
const invocation = document.getElementById("invocation")
const btnInvok = document.getElementById("btnInvok")
const message = document.getElementById("message")
const recommencer = document.getElementById("recommencer")
// Étape 3 — Réagir au clic (rappel événements)

// Direction script.js.

//     Récupère le formulaire avec getElementById).
//     Ajoute-lui un addEventListener.
//     Dans la fonction, commence toujours par event.preventDefault() ! Sinon la page se recharge et ta créature s'évapore.
//     Vérifie avec un console.log('clic !'), puis regarde la console.

invocation.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("click-click");
})
// Étape 4 — Invoquer la créature (rappel DOM)

// Le cœur du kata. Toujours dans la fonction de soumission :

//     const prenom = document.getElementById('prenom').value
//     const creature = document.getElementById('creature').value
//     Construis un message, par exemple : `${prenom}, ${creature} a entendu ton appel et te suivra tout le Bloc 1 !`
//     Affiche-le dans le <p id="message"> avec textContent.
//     Cache le formulaire : document.getElementById('invocation').classList.add('cache')
//     Affiche le résultat : document.getElementById('resultat').classList.remove('cache')

btnInvok.addEventListener("click", () => {
    const prenom   = document.getElementById('prenom').value
    const creature = document.getElementById('creature').value

    if (prenom.length > 0 && creature !== "Choisir un familier" ) {
        message.textContent = `${prenom}, ${creature} a entendu ton appel et te suivra tout le Bloc 1 !`
        invocation.classList.add('cache')
        resultat.classList.remove('cache')
    } else {
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