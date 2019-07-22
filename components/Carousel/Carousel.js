/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const createCarousel = () => {
  // creating the HTML
  const carouselDiv = document.createElement('div');
  carouselDiv.classList.add('carousel');

  const leftButton = document.createElement('div');
  leftButton.classList.add('left-button');
  leftButton.textContent = '<';
  carouselDiv.appendChild(leftButton);

  const img1 = document.createElement('img');
  img1.src = './assets/carousel/mountains.jpeg';
  img1.classList.add('img1');
  carouselDiv.appendChild(img1);

  const img2 = document.createElement('img');
  img2.src = './assets/carousel/computer.jpeg';
  img2.classList.add('img2');
  carouselDiv.appendChild(img2);

  const img3 = document.createElement('img');
  img3.src = './assets/carousel/trees.jpeg';
  img3.classList.add('img3');
  carouselDiv.appendChild(img3);

  const img4 = document.createElement('img');
  img4.src = './assets/carousel/turntable.jpeg';
  img4.classList.add('img4');
  carouselDiv.appendChild(img4);

  const rightButton = document.createElement('div');
  rightButton.classList.add('right-button');
  rightButton.textContent = '>';
  carouselDiv.appendChild(rightButton);


  const carouselContainer = document.querySelector('.carousel-container');
  carouselContainer.appendChild(carouselDiv);



  
};

createCarousel();


const carouselImg1 = document.querySelector('.img1');
const carouselImg2 = document.querySelector('.img2');
const carouselImg3 = document.querySelector('.img3');
const carouselImg4 = document.querySelector('.img4');

carouselImg1.classList.add('img-active');

const carouselImages = [carouselImg1, carouselImg2, carouselImg3, carouselImg4];

const rightButton = document.querySelector('.right-button');
const leftButton = document.querySelector('.left-button');



let currentIndex = 1;

rightButton.addEventListener('click', event => {
  currentIndex += 1;

  currentIndex > 4 ? currentIndex = 1 : currentIndex ;

  if (currentIndex === 1) {
    carouselImg1.classList.add('img-active');

    carouselImg2.classList.remove('img-active');
    carouselImg3.classList.remove('img-active');
    carouselImg4.classList.remove('img-active');
  } else if ( currentIndex === 2) {
    carouselImg2.classList.add('img-active');

    carouselImg1.classList.remove('img-active');
    carouselImg3.classList.remove('img-active');
    carouselImg4.classList.remove('img-active');
  } else if (currentIndex === 3 ) {
    carouselImg3.classList.add('img-active');

    carouselImg2.classList.remove('img-active');
    carouselImg1.classList.remove('img-active');
    carouselImg4.classList.remove('img-active');
  } else if (currentIndex === 4) {
    carouselImg4.classList.add('img-active');

    carouselImg1.classList.remove('img-active');
    carouselImg2.classList.remove('img-active');
    carouselImg3.classList.remove('img-active');
  }
});

leftButton.addEventListener('click', event => {
  currentIndex -= 1;

  currentIndex < 1 ? currentIndex = 4 : currentIndex ;

  if (currentIndex === 1) {
    carouselImg1.classList.add('img-active');

    carouselImg2.classList.remove('img-active');
    carouselImg3.classList.remove('img-active');
    carouselImg4.classList.remove('img-active');
  } else if ( currentIndex === 2) {
    carouselImg2.classList.add('img-active');

    carouselImg1.classList.remove('img-active');
    carouselImg3.classList.remove('img-active');
    carouselImg4.classList.remove('img-active');
  } else if (currentIndex === 3 ) {
    carouselImg3.classList.add('img-active');

    carouselImg2.classList.remove('img-active');
    carouselImg1.classList.remove('img-active');
    carouselImg4.classList.remove('img-active');
  } else if (currentIndex === 4) {
    carouselImg4.classList.add('img-active');

    carouselImg1.classList.remove('img-active');
    carouselImg2.classList.remove('img-active');
    carouselImg3.classList.remove('img-active');
  }
});

