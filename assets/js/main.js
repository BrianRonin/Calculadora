///////////////////////////// factory function ////////////////////
// function calculadora() {
//   return {
//     iniciar() {
//       this.input();
//     },

//     input() {
//       document.addEventListener("click", (click) => {
//         const element = click.target;
//         let text = element.innerText;

//         if (element.classList.contains("num")) {
//           this.display(text);
//         }
//         if (element.classList.contains("apagar")) {
//           this.display("");
//         }
//         if (element.classList.contains("dell")) {
//           this.display("dell");
//         }
//         if (element.classList.contains("resultado")) {
//           this.calcular();
//         }
//       });
//       /// ARROW FUNCTION É UTIL PRA NÃO PERDER O THIS!!
//       this.dp.addEventListener("keyup", (keyy) => {
//         if (keyy.key == "Enter") {
//           this.calcular();
//         }
//       });
//     },

//     display(valuee) {
//       if (valuee == "") {
//         this.dp.innerText = "";
//       } else if (valuee == "dell") {
//         this.dp.value = this.dp.value.slice(0, -1);
//       } else {
//         console.log(valuee);
//         this.dp.value += valuee;
//       }
//     },

//     calcular() {
//       let conta = this.dp.value;
//       try {
//         conta = eval(conta);
//         if (!conta) {
//           alert("conta invalida");
//           return;
//         }
//         this.dp.value = String(conta);
//       } catch (e) {
//         alert("conta invalida");
//       }
//     },
//     dp: document.getElementById("display"),
//   };
// }

// temp = calculadora();
// temp.iniciar();

///////////////////////////// Constructor function ////////////////////

const calculadora1 = new Calculadora(
  "num",
  "resultado",
  "dell",
  "apagar",
  "display"
);
const calculadora2 = new Calculadora(
  "num2",
  "resultado2",
  "dell2",
  "apagar2",
  "display2"
);
calculadora2.start();
calculadora1.start();

function Calculadora(
  classBtnNumbers,
  classBtnCalcule,
  classBtnDell,
  classBtnClean,
  idInputdisplay
) {
  this.start = function () {
    input();
  };

  let dp = document.getElementById(idInputdisplay);

  function input() {
    document.addEventListener("click", (click) => {
      const element = click.target;
      let text = element.innerText;

      if (element.classList.contains(classBtnNumbers)) {
        display(text);
      }
      if (element.classList.contains(classBtnClean)) {
        display("");
      }
      if (element.classList.contains(classBtnDell)) {
        display("dell");
      }
      if (element.classList.contains(classBtnCalcule)) {
        calcular();
      }
    });
    /// ARROW FUNCTION É UTIL PRA NÃO PERDER O THIS!!
    dp.addEventListener("keyup", (keyy) => {
      if (keyy.key == "Enter") {
        calcular();
      }
    });
  }

  function display(valuee) {
    if (valuee == "") {
      dp.value = "";
    } else if (valuee == "dell") {
      dp.value = dp.value.slice(0, -1);
    } else {
      dp.value += valuee;
    }
  }

  function calcular() {
    let conta = dp.value;
    try {
      conta = eval(conta);
      if (!conta) {
        alert("conta invalida");
        return;
      }
      dp.value = String(conta);
    } catch (e) {
      alert("conta invalida");
    }
  }
}
