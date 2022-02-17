let i = 0;
let images = [];
const time = 2000;

images[0] =
  "https://images.unsplash.com/photo-1491314316372-b3ae7000c9ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1983&q=80";
images[1] =
  "https://images.unsplash.com/photo-1495679157607-942d97bdf4f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";
images[2] =
  "https://images.unsplash.com/photo-1442406964439-e46ab8eff7c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";
images[3] =
  "https://images.unsplash.com/photo-1547915619-476e582d2609?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";
images[4] =
  "https://images.unsplash.com/photo-1523885140068-cafbdc242af7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80";
images[5] =
  "https://images.unsplash.com/photo-1548924607-fd498b796071?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";

function imgSlide() {
  document.slider.src = images[i];
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("imgSlide()", time);
}

window.onload = imgSlide;
