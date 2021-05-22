//? innerWidth: https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth

let images = [
  'url("img1.jpg")',
  'url("img2.jpg")',
  'url("img3.jpg")',
  'url("img4.jpg")',
  'url("img5.jpg")',
  'url("img6.jpg")',
];


function dropImage() {
  let section = document.querySelector('section');
  let drop = document.createElement('span');

  drop.style.top = Math.random() * innerHeight + 'px';
  
  //get random image from the array
  let bg = images[Math.floor(Math.random() * images.length)];

  let size = Math.random() * 200;
  
  
  drop.style.width = 50 + size+'px';
  drop.style.height = 50 + size+'px';
  drop.style.backgroundImage = bg;

  section.appendChild(drop);

  setTimeout(()=> {
    drop.remove()
  },6000)
}

setInterval(dropImage, 100);