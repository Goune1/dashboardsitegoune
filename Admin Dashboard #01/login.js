const password = document.getElementById('password');
const submit = document.getElementById('submit');

submit.addEventListener('click', function() {
    var mdp = password.value;
    console.log(mdp);
    
    if (mdp == "1234") {
        window.location.assign("https://gounevps.com")
        console.log("Mot de passe correct !");
        
    } else {
        console.log("Mot de passe incorrect !");
    }
});