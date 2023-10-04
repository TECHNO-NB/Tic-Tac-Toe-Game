const box = document.querySelectorAll(".box");
let x_text = "X";
let o_text = "O";
let currentPlayer = x_text;
let areas = [null, null, null, null, null, null, null, null, null];

box.forEach((v) => {
  v.addEventListener("click", (e, i) => {
    const id = e.target.id;
    if (!areas[id]) {
      currentPlayer = currentPlayer == o_text ? x_text : o_text;
      v.innerText = currentPlayer;
      areas[id] = currentPlayer;

      if (
        areas[0] == currentPlayer &&
        areas[1] == currentPlayer &&
        areas[2] == currentPlayer
      ) {
        setTimeout(() => {
          alert(`${currentPlayer} WON`);
        }, 50);
      } else if (
        areas[0] == currentPlayer &&
        areas[3] == currentPlayer &&
        areas[6] == currentPlayer
      ) {
        setTimeout(() => {
          alert(`${currentPlayer} WON`);
        }, 50);
      } else if (
        areas[1] == currentPlayer &&
        areas[4] == currentPlayer &&
        areas[7] == currentPlayer
      ) {
        setTimeout(() => {
          alert(`${currentPlayer} WON`);
        }, 50);
      } else if (
        areas[2] == currentPlayer &&
        areas[5] == currentPlayer &&
        areas[8] == currentPlayer
      ) {
        setTimeout(() => {
          alert(`${currentPlayer} WON`);
        }, 50);
      } else if (
        areas[3] == currentPlayer &&
        areas[4] == currentPlayer &&
        areas[5] == currentPlayer
      ) {
        setTimeout(() => {
          alert(`${currentPlayer} WON`);
        }, 50);
      } else if (
        areas[6] == currentPlayer &&
        areas[7] == currentPlayer &&
        areas[8] == currentPlayer
      ) {
        setTimeout(() => {
          alert(`${currentPlayer} WON`);
        }, 50);
      } else if (
        areas[0] == currentPlayer &&
        areas[4] == currentPlayer &&
        areas[8] == currentPlayer
      ) {
        setTimeout(() => {
          alert(`${currentPlayer} WON`);
        }, 50);
      } else if (
        areas[2] == currentPlayer &&
        areas[4] == currentPlayer &&
        areas[6] == currentPlayer
      ) {
        setTimeout(() => {
          alert(`${currentPlayer} WON`);
        }, 50);
      }
       
    
    }
  });
});
