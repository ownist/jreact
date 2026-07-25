// password show and hide functionality
const eyeShow = document.querySelector(".eye_show");
const passWordField = document.getElementById("password_filed");

eyeShow.addEventListener("click", function () {
  passWordField.type = "text";
});
