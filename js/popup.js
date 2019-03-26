var link = document.querySelector(".modal-link");
var popup = document.querySelector(".modal-lining");
var popap = document.querySelector(".modal-feedback");
var close = document.querySelector(".modal-close");
var imya = document.querySelector(".feedback-form-name");

var form = popup.querySelector(".feedback-form");
var message = popup.querySelector(".feedback-form-text");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("message");
} catch (err) {
    isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    imya.focus();
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popap.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
    if (!message.value) {
        evt.preventDefault();
        popap.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popap.classList.add("modal-error");
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
