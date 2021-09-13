//funktion skapas när sidan laddas 
window.onload = function checkIfLoged() {
    
    document.getElementById("wrongPassword").style.display = "none";

    //en check för att kolla om man är onloggad eller inte
    if (localStorage.getItem("enter") === "true") {
        document.getElementById("login").style.display = "none";
        document.getElementById("logout").style.display = "block"
    }else{
        document.getElementById("login").style.display = "block";
        document.getElementById("logout").style.display = "none"
    }
}

//Blir tillkalad när man klickar på knappen login
function login() {

    //Skapade an variabler och hämta värden ur input fälten 
    const keyName = "test";
    const keyPassword = "1234";
    const name = document.getElementById("name");
    const password = document.getElementById("password");

    //kollar om lösenord och användarnamn är korrekt 
    if (keyName == name.value && keyPassword == password.value) {

        localStorage.setItem("enter", "true"); //sätter true i localstoradge så den kommer ihåg att man är innloggad

        //Används för att ändra på sidan
        document.getElementById("login").style.display = "none";
        document.getElementById("logout").style.display = "block";
    } else { //Om lösenordet eller användarnamnet är fel så sätter den på så att den sidan syns
        document.getElementById("login").style.display = "none";
        document.getElementById("logout").style.display = "none";
        document.getElementById("wrongPassword").style.display = "block";
    }
}

//Funktionen blir tillkallad när man klickar på knappen logout
function logout() {
    document.getElementById("login").style.display = "block";
    document.getElementById("logout").style.display = "none";

    localStorage.clear();
}

