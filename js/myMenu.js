/**
 * Created by Rodzice on 26.02.2017.
 */

$(document).ready(function(){
   if(sessionStorage.getItem("userLogged")=="yes") $("#rightBar").before('<li><a href="#"><span class="tab"> Witaj '
       + sessionStorage.getItem("userName") + '</span></a></li>')
});