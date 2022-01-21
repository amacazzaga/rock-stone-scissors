const userChoice = document.getElementById("user-choice");
const pcChoice = document.getElementById("computer-choice");
const arrayUserButton = document.querySelectorAll(".userButton");
const arrayValues = ["piedra", "papel", "tijera"];
const modalEmpate = document.getElementById("myModal-empate");
const modalGanaste = document.getElementById("myModal-ganaste");
const modalPerdiste = document.getElementById("myModal-perdiste");
arrayUserButton.forEach((nodo) => {
  nodo.addEventListener("click", () => {
    userChoice.innerText = nodo.id; //userButton.id//
    const randomNumber = Math.floor(Math.random() * arrayValues.length);
    pcChoice.innerText = arrayValues[randomNumber];
    //empieza empate
    function tie() {
      if (userChoice.innerText === pcChoice.innerText) {
        modalEmpate.style.display = "block";
        window.onclick = function (event) {
          if (event.target == modalEmpate) {
            modalEmpate.style.display = "none";
            userChoice.innerText = "";
            pcChoice.innerText = "";
          }
        };
      }
    }
    tie();

    //PIEDRA//
    function rock() {
      if (
        userChoice.innerText === "piedra" &&
        pcChoice.innerText != "papel" &&
        pcChoice.innerText != "piedra"
      ) {
        modalGanaste.style.display = "block";
        window.onclick = function (event) {
          if (event.target == modalGanaste) {
            modalGanaste.style.display = "none";
            userChoice.innerText = "";
            pcChoice.innerText = "";
          }
        };
      } else if (
        userChoice.innerText === "piedra" &&
        pcChoice.innerText != "tijera" &&
        pcChoice.innerText != "piedra"
      ) {
        modalPerdiste.style.display = "block";
        window.onclick = function (event) {
          if (event.target == modalPerdiste) {
            modalPerdiste.style.display = "none";
            userChoice.innerText = "";
            pcChoice.innerText = "";
          }
        };
      }
    }
    rock();

    //PAPEL//
    function papper() {
      if (
        userChoice.innerText === "papel" &&
        pcChoice.innerText != "tijera" &&
        pcChoice.innerText != "papel"
      ) {
        modalGanaste.style.display = "block";
        window.onclick = function (event) {
          if (event.target == modalGanaste) {
            modalGanaste.style.display = "none";
            userChoice.innerText = "";
            pcChoice.innerText = "";
          }
        };
      } else if (
        userChoice.innerText === "papel" &&
        pcChoice.innerText != "piedra" &&
        pcChoice.innerText != "papel"
      ) {
        modalPerdiste.style.display = "block";
        window.onclick = function (event) {
          if (event.target == modalPerdiste) {
            modalPerdiste.style.display = "none";
            userChoice.innerText = "";
            pcChoice.innerText = "";
          }
        };
      }
    }
    papper();

    //TIJERA//
    function scissor() {
      if (
        userChoice.innerText === "tijera" &&
        pcChoice.innerText != "piedra" &&
        pcChoice.innerText != "tijera"
      ) {
        modalGanaste.style.display = "block";
        window.onclick = function (event) {
          if (event.target == modalGanaste) {
            modalGanaste.style.display = "none";
            userChoice.innerText = "";
            pcChoice.innerText = "";
          }
        };
      } else if (
        userChoice.innerText === "tijera" &&
        pcChoice.innerText != "papel" &&
        pcChoice.innerText != "tijera"
      ) {
        modalPerdiste.style.display = "block";
        window.onclick = function (event) {
          if (event.target == modalPerdiste) {
            modalPerdiste.style.display = "none";
            userChoice.innerText = "";
            pcChoice.innerText = "";
          }
        };
      }
    }
    scissor();
  });
});
