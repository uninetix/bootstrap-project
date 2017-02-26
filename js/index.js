/**
 * Created by Rodzice on 25.02.2017.
 */


if(sessionStorage.getItem("userLogged")==undefined || sessionStorage.getItem("userLogged")=="no") window.location.href = "login.html";

$(function(){
    $("#mainMenu").load("default.html");
});