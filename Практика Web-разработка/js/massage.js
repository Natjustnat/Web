var links  = document.getElementsByClassName('menu-js');

for (let i=0; i<links.length; i++) {
    links[i].onmouseover = function() {
        var tooltip = document.getElementsByClassName('tooltip');
        var too = tooltip[i];
        too.style.opacity = "1";
        too.style.visibility = "visible";
    }

    links[i].onmouseout = function() {
        var tooltip = document.getElementsByClassName('tooltip');
        var too = tooltip[i];
        too.style.opacity = "0";
        too.style.visibility = "hidden";
    }

}


