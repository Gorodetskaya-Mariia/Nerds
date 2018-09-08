var link = document.querySelector(".button-contacts");
var popup = document.querySelector(".modal-write-us");
var close = document.querySelector(".modal-close");
var userName = popup.querySelector("[name=userName]");
var form = popup.querySelector("form");
var userEmail = popup.querySelector("[name=userEmail]");
var message = popup.querySelector("[name=form-message]");
var isStorageSupport = true;
var storage="";

try {
  storage = localStorage.getItem("userName");
} catch (err) {
  isStorageSupport = false;
}
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  userName.focus();
  if (storage) {
    userName.value = storage;
    userEmail.focus();
  } else { userName.focus();}
});
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});
form.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value) {
  evt.preventDefault();
  popup.classList.remove("modal-error");
  popup.offsetWidth = popup.offsetWidth;
  popup.classList.add("modal-error");
} else {
  if (isStorageSupport) {
  localStorage.setItem("userName", userName.value);
}
                        }
});
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
