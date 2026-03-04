let nom = "   Fatima   "
let age = "23"
let email = "fatima@example"
let scoreJeu = "150pts"
let estAdmin = "false"
let derniereConnexion = null
let nombreConnexions = "0"

console.log("===== RAPPORT UTILISATEUR =====")

let nomCorrige = nom.trim()
if (nomCorrige === "") nomCorrige = "Inconnu"
console.log('nom              : "' + nomCorrige + '" (corrigé : espaces supprimés)')

let ageCorrige = parseInt(age)
let ageValide = !Number.isNaN(ageCorrige) && ageCorrige > 0
console.log("age              :", ageCorrige, ageValide ? "(valide)" : "(invalide)")

let arobaseIndex = email.indexOf("@")
let pointApresArobase = email.indexOf(".", arobaseIndex)
let emailValide = arobaseIndex > 0 && pointApresArobase > arobaseIndex + 1
console.log('email            : "' + email + '"', emailValide 
    ? "(valide)" 
    : "(invalide : pas de point après @)")

let scoreCorrige = parseInt(scoreJeu)
if (Number.isNaN(scoreCorrige)) scoreCorrige = 0
console.log("scoreJeu         :", scoreCorrige, '(extrait depuis "' + scoreJeu + '")')

let estAdminCorrige = (estAdmin === "true")
console.log("estAdmin         :", estAdminCorrige, 
    '(attention : Boolean("false") = true, conversion manuelle requise)')

let derniereConnexionCorrige = derniereConnexion ?? "Jamais connecté"
console.log('derniereConnexion: "' + derniereConnexionCorrige + '" (valeur par défaut via ??)')

let nbConnexions = Number(nombreConnexions)
let affichageConnexions = nbConnexions === 0 
    ? "Aucune connexion" 
    : nbConnexions
console.log('nombreConnexions : "' + affichageConnexions + '" (0 après conversion)')

console.log("================================")