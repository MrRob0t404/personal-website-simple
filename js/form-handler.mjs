import emailjs from "emailjs";

dotenv.config();

const serviceId = process.env.EMAILJS_SERVICE_ID;
const templateId = process.env.EMAILJS_TEMPLATE_ID;
const userId = process.env.EMAILJS_USER_ID;

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission
      console.log("HERE I GO");
      // Send email using EmailJS
      emailjs.sendForm("service_fqr8ued", "template_xtpxfru", this).then(
        function () {
          alert("Email sent successfully!");
        },
        function (error) {
          alert("Failed to send email: " + JSON.stringify(error));
        }
      );
    });
});
