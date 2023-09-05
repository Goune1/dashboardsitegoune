function auth() {
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    if(email == "goune.ledreo@gmail.com" && password == "goune1407") {
        window.location.assign("dashboard.html")
        alert("OK")
    } 
    else {
        alert("Accès refusé.")
        return
    }
}