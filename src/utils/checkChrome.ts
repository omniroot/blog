if (
  navigator.userAgent.indexOf("Chrome") !== -1 &&
  navigator.userAgent.indexOf("Firefox") === -1
) {
  document.body.classList.add("chrome");
} else if (navigator.userAgent.indexOf("Firefox") !== -1) {
  document.body.classList.add("firefox");
}
