// JavaScript for handling tab switching
const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// JavaScript for opening and closing the side menu
function openmenu() {
  document.getElementById("sidemenu").style.right = "0";
}

function closemenu() {
  document.getElementById("sidemenu").style.right = "-200px";
}

// JavaScript for handling form submission
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch("https://script.google.com/macros/s/YOUR_GOOGLE_SCRIPT_URL/exec", {
    method: "POST",
    body: new FormData(form),
  })
    .then((response) => {
      msg.innerHTML = "Message sent successfully!";
      setTimeout(() => {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => {
      msg.innerHTML = "Error sending message!";
    });
});
