window.addEventListener("DOMContentLoaded", () => {
  //     setInterval(() => {
  //         const moleHeads = document.querySelectorAll('.wgs__mole-head');
  //         for (let moleHead of moleHeads) {
  //             moleHead.classList.toggle('wgs__mole-head--hidden');
  //         }
  //     }, 1000)

  function popUpRandomMole() {
    const moleHeads = document.querySelectorAll(".wgs__mole-head");
    //formula: Math.random() * (max - min + 1) + min
    //min = 0 max = 7;
    let random = Math.floor(Math.random() * 8);
    let currHead = moleHeads[random];
    currHead.classList.remove("wgs__mole-head--hidden");
    setTimeout(() => {
      hideMole(currHead);
    }, 3000);
  }

  function hideMole(currHead) {
    currHead.classList.add("wgs__mole-head--hidden");
    setTimeout(() => {
      popUpRandomMole();
    }, 1000);
  }

  setTimeout(() => {
    popUpRandomMole();
  }, 0);

  const allMoles = document.querySelectorAll(".wgs__mole-head");

  for (let mole of allMoles) {
      mole.addEventListener("click", event => {
          mole.classList.add("wgs__mole-head--hidden");
          mole.classList.add("wgs__mole-head--whacked");
      });
  }
});
