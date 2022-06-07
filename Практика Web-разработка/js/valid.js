function validateForm() {
    var x = document.forms["nameform"]["name"].value;
    if (x == "") {
        alert("Необходимо ввести имя");
        return false;
    }
} 