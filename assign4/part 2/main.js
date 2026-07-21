const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

// Data object: image filenames + their alt text

const images = [
  { filename: "pic1.jpg", alt: "Closeup of a human eye" },
  { filename: "pic2.jpg", alt: "Rock that looks like a wave" },
  { filename: "pic3.jpg", alt: "Purple and white pansies" },
  { filename: "pic4.jpg", alt: "Section of wall from a pharaoh's tomb" },
  { filename: "pic5.jpg", alt: "Large moth on a leaf" },
];

// Base URL for all images

const baseURL =
  "https://mdn.github.io/shared-assets/images/examples/learn/gallery/";

// Loop through images and build the thumbnail bar

for (const image of images) {
  const newImage = document.createElement("img");
  newImage.src = `${baseURL}${image.filename}`;
  newImage.alt = image.alt;
  newImage.tabIndex = "0"; // makes it focusable via keyboard (task #5)

  thumbBar.appendChild(newImage);

  // Task #7: update displayed image when a thumbnail is clicked
  newImage.addEventListener("click", updateDisplayedImage);

  // Task #8 (skipped per assignment instructions - stretch goal)
}

// Update the full-size image + alt text when a thumbnail is activated

function updateDisplayedImage(e) {
  displayedImage.src = e.target.src;
  displayedImage.alt = e.target.alt;
}

// Darken/Lighten button logic

btn.addEventListener("click", () => {
  if (btn.classList.contains("dark")) {
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0.5)";
  } else {
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0)";
  }
  btn.classList.toggle("dark");
});