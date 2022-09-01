const count = 4;
const logoImg = `<img src="logo.png" class="back" alt="logo" />`;

const gameInit = (count) => {
  document.getElementById("gameContainer").innerHTML = "";
  for (let index = 0; index < count / 2; index++) {
    const cardImg = `<img src="https://avatars.dicebear.com/api/adventurer/${index}.svg" class="front flip" alt="${index}" />`;
    const cardDiv = `<div class="card" data-image="${index}"> ${logoImg} ${cardImg}</div>`;

    document.getElementById(
      "gameContainer"
    ).innerHTML += `${cardDiv} ${cardDiv}`;
  }

  const cards = document.querySelectorAll(".card");
  console.log(cards);

  //variables
  let isFlipped = false;
  let firstCard;
  let secondCard;
  let points = 0;

  cards.forEach((card) => card.addEventListener("click", flip));

  //flip
  function flip() {
    console.log({
      isFlipped,
      firstCard,
      secondCard,
    });
    if (isFlipped && firstCard && secondCard) return;
    console.log("card fliped");

    if (!isFlipped) {
      isFlipped = true;
      firstCard = this;
      this.classList.add("flip");
    } else {
      if (this.id === firstCard.id) return;
      this.classList.add("flip");
      secondCard = this;
      checkIt();
    }
  }

  //checking
  function checkIt() {
    console.log(firstCard.dataset.image, secondCard.dataset.image);
    if (firstCard.dataset.image === secondCard.dataset.image) {
      success();
    } else {
      fail();
    }
    console.log("checking....");
  }
  //success
  function success() {
    console.log("Success both are matching");
    firstCard.removeEventListener("click", flip);
    secondCard.removeEventListener("click", flip);

    setTimeout(() => {
      firstCard.style.visibility = "hidden";
      secondCard.style.visibility = "hidden";
      points += 1;
      if (points === count / 2) {
        gameInit(count * 2);
      }
      resett();
    }, 500);
  }
  //fail
  function fail() {
    //console.log("Failed flip again");

    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
      resett();
    }, 1000);
  }
  //reset
  function resett() {
    isFlipped = false;
    firstCard = null;
    secondCard = null;
  }
  //shuffle
  function shuffle() {
    console.log("====================================");
    console.log("shuffling");
    console.log("====================================");
    cards.forEach((card, i) => {
      let index = Math.floor(Math.random() * (count - 1) + 1);
      card.style.order = index;
      card.id = i;
    });
  }

  shuffle();
};

gameInit(count);
//winning message displaying
//auto refreshing
// let refresh = window.setTimeout(function () {
//   window.location.reload();
// }, 2200);
