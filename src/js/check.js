function etudcheck() {

    var etud = document.cookie.replace(/(?:(?:^|.*;\s*)etud\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    if (etud !== "oui") {
        var confirmation = confirm("Ce site internet a été créé dans le cadre d'un exercice de l'IUT Bordeaux Montaigne.");
        if (confirmation) {
            document.cookie = "etud=oui; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
        }
    }
}

function verifierAge() {
    // Vérifier si le cookie d'âge a déjà été défini
    var ageVerifie = document.cookie.replace(/(?:(?:^|.*;\s*)ageVerifie\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    
    if (ageVerifie !== "oui") {
        var confirmation = confirm("Êtes-vous âgé de 18 ans ou plus ?");
        if (confirmation) {
            // Définir un cookie pour indiquer que l'âge a été vérifié
            document.cookie = "ageVerifie=oui; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
            alert("Bienvenue !");
        } else {
            alert("Désolé, vous devez avoir 18 ans ou plus pour accéder à ce contenu.");
        }
    }
}

etudcheck();
verifierAge();


