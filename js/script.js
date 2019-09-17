document.addEventListener("DOMContentLoaded", function ready() {

    login_form_button.onclick = function() {
        console.log("click");
        if (login.value == "Admin" && pass.value == "12345") {
            console.log("ok");
        } else { return false; }
    }


});