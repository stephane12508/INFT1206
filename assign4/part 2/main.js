/*
Name: Joel ngniayie
File: main.js
Date: 30 July 2026
Populates the thumbnail bar, handles clicking thumbnails to change the
displayed image, and toggles the darken/lighten button.
*/


const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('.dark');

const imageFilenames = [
  'pic1.jpg',
  'pic2.jpg',
  'pic3.jpg',
  'pic4.jpg',
  'pic5.jpg'
];

// 3. Alt text for each image, matched by index to imageFilenames
const altText = [
  'Closeup of blue and green feathers',
  'Whale breaching with water splashing',
  'Fire dancer holding torches',
  'Wall with graffiti art',
  'Sunset over the sea'
];

// 4. Loop through the images, creating a thumbnail for each
for (let i = 0; i < imageFilenames.length; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${imageFilenames[i]}`);
  newImage.setAttribute('alt', altText[i]);
  thumbBar.appendChild(newImage);

  // 5. Add a click handler to each thumbnail
  newImage.addEventListener('click', (e) => {
    displayedImage.setAttribute('src', e.target.getAttribute('src'));
    displayedImage.setAttribute('alt', e.target.getAttribute('alt'));
  });
}

btn.addEventListener('click', () => {
  const currentClass = btn.getAttribute('class');

  if (currentClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
  }
});