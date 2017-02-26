/**
 * Created by Rodzice on 26.02.2017.
 */

var v_login = "Jan";
var v_password = "qazar0404";

$( document ).ready( function () {
    $("#btnLogin").click(function () {
        if ($("#myLogin").val() == v_login && $("#myPassword").val() == v_password) {
            sessionStorage.setItem("userLogged", "yes");
            sessionStorage.setItem("userName", v_login);
            window.location.href = "index.html";
            return false;
        } else {
            sessionStorage.setItem("userLogged", "no");
            window.location.href = "index.html";
            return false;
        }
    })
})
