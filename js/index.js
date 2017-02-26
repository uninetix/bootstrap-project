/**
 * Created by Rodzice on 25.02.2017.
 */


if(sessionStorage.getItem("userLogged")==undefined || sessionStorage.getItem("userLogged")=="no") window.location.href = "myLogin.html";

$(document).ready(function() {
    $("#mainMenu").load("myMenu.html");
})
