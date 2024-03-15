// Fonction pour afficher la pop-up si l'âge n'a pas déjà été vérifié
function verifierAge() {
    // Vérifier si le cookie d'âge a déjà été défini
    var ageVerifie = document.cookie.replace(/(?:(?:^|.*;\s*)ageVerifie\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    if (ageVerifie !== "oui") {
        var confirmation = confirm("Ce site internet a été créé dans le cadre d'un exercice de l'IUT Bordeaux Montaigne.");
        if (confirmation) {
            // Définir un cookie pour indiquer que l'âge a été vérifié
            document.cookie = "ageVerifie=oui; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
        }
    }
}
// Appeler la fonction de vérification de l'âge
verifierAge();
