document.addEventListener("DOMContentLoaded", (event) => {
  let p = document.createElement("p");
  p.textContent = "Nouveau paragraphe Vanilla JS";
  document.getElementById("container").appendChild(p);
});
