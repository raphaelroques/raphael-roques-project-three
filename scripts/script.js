const myGame = {};

let credits = 2;
let round = 0;

//create an array to hold all random image urls
myGame.images = [
  "./images/image1.jpg",
  "./images/image2.jpg",
  "./images/image3.jpg",
  "./images/image4.jpg",
  "./images/image5.jpg",
  "./images/image6.jpg",
  "./images/image7.jpg",
  "./images/image8.jpg",
  "./images/image9.jpg",
  "./images/image10.jpg",
  "./images/image11.jpg",
];

myGame.sounds = [
  (sound1 = new Audio("./audio/sound1.mp3")),
  (sound2 = new Audio("./audio/sound2.mp3")),
  (sound3 = new Audio("./audio/sound3.mp3")),
  (sound4 = new Audio("./audio/sound4.mp3")),
  (sound5 = new Audio("./audio/sound5.mp3")),
];

myGame.starter = function () {
  $(".volume-off").hide();
  $(".buttons-container").hide();
  $(".score-container").hide();
  $(".pay-table-container").hide();
  $(".page-container").hide();
  $(".btn-stop").hide();
  $(".pay-table-image").hide();
};

myGame.volume = function () {
  myGame.muted = function () {
    $(".volume-on").on("click", function () {
      $(".volume-on").hide();
      $(".volume-off").show();
      myGame.sounds.forEach((sound) => {
        sound.muted = true;
      });
    });
  };
  myGame.muted();
  myGame.unmuted = function () {
    $(".volume-off").on("click", function () {
      $(".volume-off").hide();
      $(".volume-on").show();
      myGame.sounds.forEach((sound) => {
        sound.muted = false;
      });
    });
  };
  myGame.unmuted();
};

myGame.payTable = function () {
  $(".pay-table-btn").on("click", function () {
    $(".pay-table-image").toggle();
    $(".page-container").toggle();
    $(".buttons-container").toggle();
    $(".score-container").toggle();
    $(".game-over-container").toggle();
  });
};

myGame.start = function () {
  $(".start").on("click", function () {
    $(".welcome").hide();
    $(".start").hide();
    $(".buttons-container").show();
    $(".score-container").show();
    $(".pay-table-container").show();
    $(".page-container").show();
    $("#random-image-1").attr("src", myGame.images[8]);
    $("#random-image-2").attr("src", myGame.images[8]);
    $("#random-image-3").attr("src", myGame.images[8]);
  });
};

myGame.displayGame = function () {
  $(".btn-credits").html(
    `<p>YOUR CREDITS: <span class="digital">${credits}</span></p>`
  );
  myGame.payTable();
  myGame.start();
};

myGame.addCredits = function () {
  $(".btn-addCredits").on("click", function () {
    $(".btn-addCredits").hide();
    $(".game-over").hide();
    $(".welcome").hide();
    $(".buttons-container").show();
    $(".btn-credits").html(
      `<p>YOUR CREDITS: <span class="digital">${credits}</span></p>`
    );
    $(".btn-play").show();
  });
};

myGame.spinReels = function () {
  $(".btn-play").on("click", function () {
    $(".welcome").hide();
    $(".btn-play").hide();
    $(".btn-stop").show();
    credits -= 2;
    round++;
    $(".btn-round-container").html(`<p class="btn-round"></p>`);
    $(".btn-round").html(`ROUND: <span class="digital">${round}</span>`);
    $(".btn-credits").html(
      `<p>YOUR CREDITS: <span class="digital">${credits}</span></p>`
    );
    $("#random-image-1").attr("src", "./images/gif1.gif");
    $("#random-image-2").attr("src", "./images/gif2.gif");
    $("#random-image-3").attr("src", "./images/gif3.gif");
  });
};

myGame.stopReels = function () {
  $(".btn-stop").click(function () {
    $(".btn-stop").hide();
    $(".btn-play").show();

    let image_url_1 = myGame.images[Math.floor(Math.random() * 11)];
    $("#random-image-1").attr("src", image_url_1);

    let image_url_2 = myGame.images[Math.floor(Math.random() * 11)];
    $("#random-image-2").attr("src", image_url_2);

    let image_url_3 = myGame.images[Math.floor(Math.random() * 11)];
    $("#random-image-3").attr("src", image_url_3);

    if (
      image_url_1 === image_url_2 &&
      image_url_1 === image_url_3 &&
      image_url_1 === myGame.images[8]
    ) {
      credits += 30;
      myGame.sounds[4].play();
      $(".btn-credits").html(
        `<p>YOUR CREDITS: <span class="digital">${credits}</span></p>`
      );
      $(".btn-paid-container").html(
        `<p class='btn-paid'>WINNER PAID: <span class="digital">30</span></p>`
      );
    } else if (image_url_1 === image_url_2 && image_url_1 === image_url_3) {
      credits += 20;
      myGame.sounds[3].play();
      $(".btn-credits").html(
        `<p>YOUR CREDITS: <span class="digital">${credits}</span></p>`
      );
      $(".btn-paid-container").html(
        `<p class='btn-paid'>WINNER PAID: <span class="digital">20</span></p>`
      );
    } else if (
      (image_url_1 === image_url_2 && image_url_1 === myGame.images[8]) ||
      (image_url_2 === image_url_3 && image_url_2 === myGame.images[8]) ||
      (image_url_1 === image_url_3 && image_url_1 === myGame.images[8])
    ) {
      credits += 6;
      myGame.sounds[2].play();
      $(".btn-credits").html(
        `<p>YOUR CREDITS: <span class="digital">${credits}</span></p>`
      );
      $(".btn-paid-container").html(
        `<p class='btn-paid'>WINNER PAID: <span class="digital">06</span></p>`
      );
    } else if (
      image_url_1 === image_url_2 ||
      image_url_1 === image_url_3 ||
      image_url_2 === image_url_3
    ) {
      credits += 4;
      myGame.sounds[1].play();
      $(".btn-credits").html(
        `<p>YOUR CREDITS: <span class="digital">${credits}</span>`
      );
      $(".btn-paid-container").html(
        `<p class='btn-paid'>WINNER PAID: <span class="digital">04</span></p>`
      );
    } else if (
      image_url_1 === myGame.images[8] ||
      image_url_2 === myGame.images[8] ||
      image_url_3 === myGame.images[8]
    ) {
      credits += 2;
      myGame.sounds[0].play();
      $(".btn-credits").html(
        `<p>YOUR CREDITS: <span class="digital">${credits}</span></p>`
      );
      $(".btn-paid-container").html(
        `<p class='btn-paid'>WINNER PAID: <span class="digital">02</span></p>`
      );
    } else {
      $(".btn-credits").html(
        `<p>YOUR CREDITS: <span class="digital">${credits}</span></p>`
      );
      $(".btn-paid-container").html(
        `<p class='btn-paid'>WINNER PAID: <span class="digital">00</span></p>`
      );
    }

    if (credits === 0) {
      credits += 2;
      $(".btn-play").hide();
      $(".btm-stop").hide();
      $(".buttons-container").hide();
      $(".welcome-image").hide();
      $(".welcome")
        .append(
          `<div class='game-over-container'><p class='game-over'>GAME OVER</p><button class='btn-addCredits'>BUY MORE CREDITS</button></div>`
        )
        .show();
      myGame.addCredits();
    }
  });
};



myGame.init = function () {
  myGame.volume();
  myGame.displayGame();
  myGame.spinReels();
  myGame.stopReels();
};

myGame.starter();
$(document).ready(function () {
  
  myGame.init();
});
