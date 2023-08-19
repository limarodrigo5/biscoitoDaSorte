const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const fortuneCookie = document.querySelector('#fortuneCookie')
const btnReset = document.querySelector("#btnReset");
const phrases = [
"Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
"O sucesso é a soma de pequenos esforços repetidos dia após dia.",
"A persistência é o caminho do êxito.",
"Acredite em você mesmo e alcance o impossível.",
"Nunca é tarde demais para seguir os teus sonhos.",
"Seja gentil, pois cada pessoa que você encontra está travando uma batalha que você desconhece.",
"Celebre cada progresso, não importa quão pequeno ele seja.",
"Seja a versão da pessoa que você se orgulharia de ser.",
"Acredite que você pode e você já está no meio do caminho."
]


//eventos
fortuneCookie.addEventListener("click", toggleScreen);
btnReset.addEventListener("click", toggleScreen);
document.addEventListener("keydown", function (e) {
    if (e.key == "Enter" && screen1.classList.contains("hide")) {
      toggleScreen();
    }
  });


function toggleScreen() {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];

document.querySelector('#phrase').textContent = randomPhrase;

  }