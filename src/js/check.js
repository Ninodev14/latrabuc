function verifierAge() {

    var ageVerifie = document.cookie.replace(/(?:(?:^|.*;\s*)ageVerifie\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    if (ageVerifie !== "oui") {
        var confirmation = confirm("Ce site internet a été créé dans le cadre d'un exercice de l'IUT Bordeaux Montaigne.");
        if (confirmation) {
            document.cookie = "ageVerifie=oui; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
        }
    }
}
verifierAge();
