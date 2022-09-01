const initialCount = 4;
const logoImg = `<img src="logo.png" class="back" alt="logo" />`;
const gameContainer = document.getElementById("gameContainer");

const gameInit = (count) => {
  gameContainer.innerHTML = "";

  for (let index = 0; index < count / 2; index++) {
    const cardImg = `<img src="https://avatars.dicebear.com/api/adventurer/${index}.svg" class="front flip" alt="${index}" />`;
    const cardDiv = `<div  class="card" data-image="${index}"> ${logoImg} ${cardImg}</div>`;
    gameContainer.innerHTML += `${cardDiv} ${cardDiv}`;
  }

  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => card.addEventListener("click", flip));

  //variables
  let isFlipped = false,
    firstCard,
    secondCard,
    points = 0;

  //flip
  function flip() {
    if ((isFlipped && firstCard && secondCard) || this?.id === firstCard?.id)
      return;

    console.log("card fliped");

    if (!isFlipped) {
      isFlipped = true;
      firstCard = this;
      this.classList.add("flip");
    } else {
      this.classList.add("flip");
      secondCard = this;
      checkIt();
    }
  }

  //checking
  function checkIt() {
    console.log("checking....");

    if (firstCard.dataset.image === secondCard.dataset.image) {
      success();
    } else {
      fail();
    }
  }
  //success
  function success() {
    console.log("Success!! both are matching");

    firstCard.removeEventListener("click", flip);
    secondCard.removeEventListener("click", flip);

    setTimeout(() => {
      firstCard.style.visibility = "hidden";
      secondCard.style.visibility = "hidden";
      points += 1;
      if (points === count / 2) {
        gameInit(count * 2);
      }
      reset();
    }, 500);
  }

  //fail
  function fail() {
    console.log("Failed flip again");

    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
      reset();
    }, 1000);
  }

  //reset
  function reset() {
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

gameInit(initialCount);
