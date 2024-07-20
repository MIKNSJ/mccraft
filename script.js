function clickNavButton() {
    document.getElementsByClassName("nav_menu")[0].classList.toggle("show_nav_menu");
    document.getElementById("nav_icon").classList.toggle("change_button");
}

window.onclick = function(event) {
    if (!event.target.matches(".nav_button")) {
        var elements = document.getElementsByClassName("nav_menu");
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            if (element.classList.contains("show_nav_menu")) {
                element.classList.remove("show_nav_menu");
            }
        }

        document.getElementById("nav_icon").classList.remove("change_button");
    }
}
