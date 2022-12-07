document.querySelector("form").addEventListener("submit", function (event) {
  !this.checkValidity() &&
    (event.preventDefault(), this.classList.add("was-validated"));
});
