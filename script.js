function clickNavButton() {
    document.getElementsByClassName("nav_bar_list")[0].classList.toggle("show");
    document.getElementById("nav_icon").classList.toggle("change_button");
}

window.onclick = function(event) {
    if (!event.target.matches(".nav_button")) {
        var elements = document.getElementsByClassName("nav_bar_list");
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            if (element.classList.contains("show")) {
                element.classList.remove("show");
            }
        }

        document.getElementById("nav_icon").classList.remove("change_button");
    }
}
