import throttle from "lodash.throttle";

const feedbackForm = document.querySelector(".feedback-form");

feedbackForm.addEventListener('input', throttle(setLocalRecords, 500));

const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');