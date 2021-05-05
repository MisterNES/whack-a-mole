
  //     setInterval(() => {
  //         const moleHeads = document.querySelectorAll('.wgs__mole-head');
  //         for (let moleHead of moleHeads) {
  //             moleHead.classList.toggle('wgs__mole-head--hidden');
  //         }
  //     }, 1000)

  function popUpRandomMole() {
    const moleHeads = document.querySelectorAll(".wgs__mole-head:not(.wgs__mole-head--whacked)");
    if (moleHeads.length === 0){
        alert("You won!")
        return;
    }
    //formula: Math.random() * (max - min + 1) + min
    //min = 0 max = 7;
    // console.log(moleHeads)
    let random = Math.floor(Math.random() * moleHeads.length);
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

window.addEventListener("DOMContentLoaded", () => {
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
