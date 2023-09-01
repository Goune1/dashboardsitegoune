const password = document.getElementById('password');
const submit = document.getElementById('submit');

submit.addEventListener('click', function() {
    var mdp = password.value;
    console.log(mdp);
    
    if (mdp === "1234") {
        // Le mot de passe est correct, vous pouvez effectuer des actions ici
        // Par exemple, rediriger l'utilisateur vers une autre page ou afficher un message de succès
        location.href("https://gounevps.com/index.html")
        console.log("Mot de passe correct !");
        
    } else {
        // Le mot de passe est incorrect, vous pouvez afficher un message d'erreur ou prendre d'autres mesures
        console.log("Mot de passe incorrect !");
    }
});
