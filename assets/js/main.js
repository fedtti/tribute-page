/**
 * A11Y
 */
const image = document.getElementsByTagName("img")[0];
const caption = document.getElementById("img-caption");

image.addEventListener("focus", () => {
  caption.setAttribute("aria-hidden", "false");
}, false);

image.addEventListener("blur", () => {
  caption.setAttribute("aria-hidden", "true");
}, false);
