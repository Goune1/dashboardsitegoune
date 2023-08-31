var username = document.getElementById('username')
var password = document.getElementById('password')
var submit = document.getElementById('submit')

submit.addEventListener('click', function() {
   // var pseudo = username.value
    var mdp = password.value
    console.log(mdp)
    
    if(mdp === "goune1407") {
        window.location.href = "dashboard.html";
    } 
});
