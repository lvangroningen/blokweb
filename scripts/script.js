// het hartje voor opslaan veranderd door er op te klikken.

var liken = document.querySelector("article:first-of-type button.wish");

//hier geef je de actie mee aan. Door te clicken gaan ze naar de onderste regel.
liken.addEventListener("click", opslaan);

function opslaan() {
  liken.innerHTML = "&#128150";
}
