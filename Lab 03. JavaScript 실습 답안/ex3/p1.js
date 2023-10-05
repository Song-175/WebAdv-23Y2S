function isBlank(inputField) {
    if (inputField.type == "checkbox") {
        if (inputField.checked) {
            return false;
        }
        return true;
    }

    if (inputField.type == "text") {
        if (inputField.value == "") {
            return true;
        }
        return false;
    }



}

function makeRed(inputField) {
    inputField.style.backgroundColor = "#AA0000";
    inputField.parentNode.style.backgroundColor = "#AA0000";
    inputField.parentNode.style.color = "#FFFFFF";
}

function makeClean(inputField) {
    inputField.parentNode.style.backgroundColor = "#FFFFFF";
    inputField.parentNode.style.color = "#000000";
}

window.onload = function () {
    var mainForm = document.getElementById("mainForm");

    var requiredInputs = document.querySelectorAll(".required");

    for (var i = 0; i < requiredInputs.length; i++) {
        requiredInputs[i].onfocus = function () {
            this.style.backgroundColor = "#EEEE00";
            this.parentNode.style.color = "#000000";
            this.parentNode.style.backgroundColor = "#FAFCFF";
        }
    }

    for (var i = 0; i < requiredInputs.length; i++) {
        requiredInputs[i].onblur = function () {
            this.style.backgroundColor = "#FAFCFF";
        }
    }

    mainForm.onsubmit = function (e) {
        var requireInputs = document.querySelectorAll(".required");
        for (var i = 0; i < requireInputs.length; i++) {
            if (isBlank(requireInputs[i])) {
                e.preventDefault();
                makeRed(requireInputs[i]);
            }
            else {
                makeClean(requireInputs[i]);
            }
        }
    }
}