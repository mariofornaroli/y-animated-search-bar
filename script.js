window.addEventListener("load", () => {

    const control = document.getElementById("control");
    const searchInput = document.getElementById("searchInput");

    control.addEventListener("click", function(e) {
        searchInput.classList.toggle('opened');
        searchInput.value = '';

        /* Set focus when opened */
        if (searchInput.classList.contains('opened')) {
            searchInput.focus();
        } else {
            searchInput.blur();
        }

    })
})