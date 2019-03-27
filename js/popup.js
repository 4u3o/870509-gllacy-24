var link = document.querySelector(".modal-link");
var popup = document.querySelector(".modal-lining");
var popap = document.querySelector(".modal-feedback");
var close = document.querySelector(".modal-close");
var forename = document.querySelector(".feedback-form-name");

var form = popup.querySelector(".feedback-form");
var message = popup.querySelector(".feedback-form-text");
var email = popup.querySelector(".feedback-form-email");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("forename");
} catch (err) {
    isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    forename.focus();
    if (storage) {
        forename.value = storage;
        email.focus();
    } else {
        forename.focus();
    };
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popap.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
    if (!message.value || !forename.value) {
        evt.preventDefault();
        popap.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popap.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("forename", forename.value);
        }
    }
});

document.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
        }
    }
});
