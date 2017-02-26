/**
 * Created by Rodzice on 26.02.2017.
 */

var v_login = "Jan";
var v_password = "qazar0404";

$( document ).ready( function () {
    $("#btnSubmit").click(function () {
        if ($("#login").val() == v_login && $("#password").val() == v_password) {
            sessionStorage.setItem("userLogged", "yes");
         window.location.href = "index.html";
        }
    })
})