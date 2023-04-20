const scriptURL = "https://script.google.com/macros/s/AKfycbydKLjG1oraEHTeSl7STcwTnqlo1jCxa5wdsz439bJxOdW8DAaLRtlLDwxBCmo8Meer/exec"
const form = document.forms['contact-form'];
const formEl = document.querySelector(".form");
const responseSuccess = document.querySelector(".response-success");
const responseFailed = document.querySelector(".response-failed");
const loadingSpinner = document.querySelector(".loading-spinner");


const onFormSubmitHandle = (ev) => {
  ev.preventDefault();
  loadingSpinner.classList.remove("sr-only");
  formEl.classList.add("sr-only");

  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form),
  })
    .then(response => {
      console.log(response);
      form.reset();
      loadingSpinner.classList.add("sr-only");
      formEl.classList.remove("sr-only");
      responseSuccess.classList.remove("sr-only");
    })
    .catch(error => {
      console.log(error);
      loadingSpinner.classList.add("sr-only");
      formEl.classList.remove("sr-only");
      responseFailed.classList.remove("sr-only");
    });
};

formEl.addEventListener("submit", onFormSubmitHandle);