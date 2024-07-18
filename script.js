function clickNavButton() {
    document.getElementsByClassName("nav_bar_list")[0].classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches(".nav_button")) {
        var elements = document.getElementsByClassName("nav_bar_list");
        for (var i = 0; i < dropdowns.length; i++) {
            var element = elements[i];
            if (element.classList.contains("show")) {
                element.classList.remove("show");
            }
        }
    }
}
