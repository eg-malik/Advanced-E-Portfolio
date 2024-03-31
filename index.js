// template_ze0htxl
// service_pcq3g64
// T6xJ2kq4dGEgB4gEh

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--sucess");
  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      "service_pcq3g64",
      "template_ze0htxl",
      event.target,
      "T6xJ2kq4dGEgB4gEh"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert("The email service is temporarily unavailable.");
    });
}

let isModalOpen = false;

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  // Toggle Modal
  isModalOpen = !isModalOpen;
  document.body.classList += " modal--open";
}