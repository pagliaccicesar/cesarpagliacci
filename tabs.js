// js para frase de "desarrollo web"

const target = document.getElementById('shimmerWave');
function splitTextToSpans(targetElement) {
    if (targetElement) {
        const text = targetElement.textContent;
        targetElement.innerHTML = '';
        for (let character of text) {
            const span = document.createElement('span');
            if (character === ' ') {
                span.innerHTML = '&nbsp;';
            } else {
                span.textContent = character;
            }
            targetElement.appendChild(span);
        }
    }
}
splitTextToSpans(target);



//   js del nuevo formulario   

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});





