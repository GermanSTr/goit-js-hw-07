import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

function renderImg() {
  const galleryHTML = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}"/></a></li>`;
  });
  galleryEl.innerHTML = galleryHTML.join("");
}
renderImg();

var lightbox = new SimpleLightbox(".gallery .gallery__link", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
