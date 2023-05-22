// ! important javascript for (Mitoru-Web) //

// * JavaScript Main.js --------------------------------------------- //

window.onload = function () {
  // Elemente //
  var formbutton = document.getElementById("formularbutton");
  let arrayZitat = [];
  let arrayFarben = [];
  let zwischenFarbe = "#11111111";
  let zwischenZitat = "Test";
  zitatausgabe = document.querySelector(".zitat-ausgabe");

  // Funktionen //
  function generateZitat() {
    if (document.getElementById("formularname").value !== "") {

      Arrays();
      
      do { zufälligerIndex1 = Math.floor(Math.random() * arrayZitat.length);
      } while ((arrayZitat[zufälligerIndex1]) === zwischenZitat);
      do { zufälligerIndex2 = Math.floor(Math.random() * arrayFarben.length);
      } while ((arrayFarben[zufälligerIndex2]) === zwischenFarbe);

      zwischenZitat = arrayZitat[zufälligerIndex1];
      zwischenFarbe = arrayFarben[zufälligerIndex2];


      document.getElementById("formulartext").innerHTML = arrayZitat[zufälligerIndex1];
      zitatausgabe.style.backgroundColor = arrayFarben[zufälligerIndex2];

    } else {
      alert("Geben sie bitte einen Namen ein !");
    }
  }

  function Arrays() {
    var formname = document.getElementById("formularname").value;
    arrayZitat = [
      "Es war einmal ein mutiges und kluges Eichhörnchen namens " +
        formname +
        ", das in einem Wald lebte. " +
        formname +
        " war im ganzen Wald für ihr/sein schnelles Denken und ihre/seine Tapferkeit bekannt.",
      "Es war einmal eine junge Frau namens " +
        formname +
        ", die in einem kleinen Dorf lebte. Eines Tages kam eine arme alte Frau in das Dorf und bat um Essen und Unterkunft. Die Leute wiesen die alte Frau ab, doch " +
        formname +
        " hatte Mitleid und lud sie ein bei ihr zu wohnen",
      "Es war einmal ein junges/junger Mädchen/Junge namens " +
        formname +
        ", das in einer kleinen Stadt lebte. " +
        formname +
        " setzte sich immer für ihre/seine Freunde und Nachbarn ein und war für ihre/seine großzügikkeit bekannt. Aber so sehr sie/er sich auch bemühte, sie/er konnte es einfach nicht allen recht machen.",
    ];
    arrayFarben = [("#8FC1E3"), ("#007BA7"), ("#98B4D4"), ("#6D9BC3"), ("#2A52BE"), ("#6F8FAF"), ("#088F8F"), ("#0096FF"), ("#5D3FD3"), ("#1F51FF"), ("#96DED1"), ("#4169E1"), ("#87CEEB"), ("#40B5AD")];
  }
  

  // EventListener //
  formbutton.addEventListener("click", generateZitat);
};
