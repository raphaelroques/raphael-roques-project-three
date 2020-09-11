//create an array to hold all random image urls
const images = [
    './images/image1.jpg',
    './images/image2.jpg',
    './images/image3.jpg',
    './images/image4.jpg',
    './images/image5.jpg',
    './images/image6.jpg',
    './images/image7.jpg',
    './images/image8.jpg',
    './images/image9.jpg',
    './images/image10.jpg',
    './images/image11.jpg'
    
];

var sound1 = new Audio('./audio/sound1.mp3');
var sound2 = new Audio('./audio/sound2.mp3');
var sound3 = new Audio('./audio/sound3.mp3');
var sound4 = new Audio('./audio/sound4.mp3');
var sound5 = new Audio('./audio/sound5.mp3');

let credits = 1;
let round = 0;

$('.volume-off').hide();
$('.volume-on').on('click',function(){
  $('.volume-on').hide();
  $('.volume-off').show();
  sound1.muted = true;
  sound2.muted = true;
  sound3.muted = true;
  sound4.muted = true;
  sound5.muted = true;
});

$('.volume-off').on('click',function(){
  $('.volume-off').hide();
  $('.volume-on').show();
  sound1.muted = false;
  sound2.muted = false;
  sound3.muted = false;
  sound4.muted = false;
  sound5.muted = false;
});

$('.buttons-container').hide();
$('.score-container').hide();
$('.pay-table-container').hide();


$('.page-container').hide();  
$('.btn-stop').hide();
$('.pay-table-image').hide();
  
  $(document).ready(function(){

    $('.start').on('click',function(){
      $('.welcome').hide();
      $('.buttons-container').show();
      $('.score-container').show();
      $('.pay-table-container').show();
      $('.start').hide();
      $('.page-container').show();
      $('#random-image-1').attr('src','./images/image9.jpg');
      $('#random-image-2').attr('src','./images/image9.jpg');
      $('#random-image-3').attr('src','./images/image9.jpg');
    })

    // display the credits
    $('.btn-credits').html(`<p>YOUR CREDITS: <span class="digital">${credits}</span></p>`);



    $('.pay-table-btn').on('click',function(){
      $('.pay-table-image').toggle()

    })



    $('.btn-play').on('click',function(){
      $('.welcome').hide();
      // $('.page-container').show();
      $('.btn-play').hide();
      $('.btn-stop').show();
        
        credits--;
        round++;

      $('.btn-round-container').html(`<p class="btn-round"></p>`);
      $('.btn-round').html(`ROUND: <span class="digital">${round}</span>`);
      $('.btn-credits').html(`<p>YOUR CREDITS: <span class="digital">${credits}</span></p>`);

      $('#random-image-1').attr('src','./images/gif1.gif');
      $('#random-image-2').attr('src','./images/gif2.gif');
      $('#random-image-3').attr('src','./images/gif3.gif');
      
      
  
    });




    $('.btn-stop').click(function(){
      $('.btn-play').show();
      $('.btn-stop').hide();
      

      let image_url_1 = images[Math.floor(Math.random() * 11)];
      $('#random-image-1').attr('src',image_url_1);
      
      let image_url_2 = images[Math.floor(Math.random() * 11)];
      $('#random-image-2').attr('src',image_url_2);
  
      let image_url_3 = images[Math.floor(Math.random() * 11)];
      $('#random-image-3').attr('src',image_url_3);
  

      if (image_url_1===image_url_2 && image_url_1===image_url_3 && image_url_1===images[8]){
        credits+=15;
        sound5.play();
        $('.btn-credits').html(`<p>YOUR CREDITS: <span class="digital">${credits}</span></p>`);
        $('.btn-paid-container').html(`<p class='btn-paid'>WINNER PAID: <span class="digital">15</span></p>`)
      } else if (image_url_1===image_url_2 && image_url_1===image_url_3){
        credits+=10;
        sound4.play();
        $('.btn-credits').html(`<p>YOUR CREDITS: <span class="digital">${credits}</span></p>`);
        $('.btn-paid-container').html(`<p class='btn-paid'>WINNER PAID: <span class="digital">10</span></p>`);
      } else if (image_url_1===image_url_2 && image_url_1===images[8] || image_url_2===image_url_3 && image_url_2===images[8] || image_url_1===image_url_3 && image_url_1===images[8]){
        credits+=5;
        sound3.play();
        $('.btn-credits').html(`<p>YOUR CREDITS: <span class="digital">${credits}</span></p>`);
        $('.btn-paid-container').html(`<p class='btn-paid'>WINNER PAID: <span class="digital">05</span></p>`);
      } else if (image_url_1===image_url_2 || image_url_1===image_url_3 || image_url_2===image_url_3){
        credits+=2;
        sound2.play();
        $('.btn-credits').html(`<p>YOUR CREDITS: <span class="digital">${credits}</span>`);
        $('.btn-paid-container').html(`<p class='btn-paid'>WINNER PAID: <span class="digital">02</span></p>`);
      } else if (image_url_1===images[8] || image_url_2===images[8] || image_url_3===images[8]){
        credits++;
        sound1.play();
        $('.btn-credits').html(`<p>YOUR CREDITS: <span class="digital">${credits}</span></p>`);
        $('.btn-paid-container').html(`<p class='btn-paid'>WINNER PAID: <span class="digital">01</span></p>`);
      } else {
        $('.btn-credits').html(`<p>YOUR CREDITS: <span class="digital">${credits}</span></p>`);
        $('.btn-paid-container').html(`<p class='btn-paid'>WINNER PAID: <span class="digital">00</span></p>`);
      } 
      
      
      if(credits === 0 ){
        credits +=1;
        $('.btn-play').hide();
        $('.btm-stop').hide();
        $('.buttons-container').hide();
        // CODE A REVOIR !!!!!!!
        // $('.welcome').append(`<h2 class='game-over'>GAME OVER</h2>`).show();
        $('.welcome-image').hide();
        $('.welcome').append(`<button class='btn-addCredits'> GAME OVER BUY MORE CREDITS</button>`).show().on('click', function(){
          $('.btn-addCredits').hide();
          $('.game-over').hide();
          $('.buttons-container').show();
          $('.welcome').hide();
          

         
        
          $('.btn-credits').html(`<p>YOUR CREDITS: <span class="digital">${credits}</span></p>`);
          $('.btn-play').show();
          
        });

       
        
      };
      


      
    });
    

    

  });



  

  
