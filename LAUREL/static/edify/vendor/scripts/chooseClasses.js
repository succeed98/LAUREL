let masa = false;
function showCheckboxess() {
    var checkboxes = document.getElementById("checkbox");
    if (!masa) {
        checkboxes.style.display = "block";
        masa = true;
    } else {
        checkboxes.style.display = "none";
        masa = false;
    }
}

