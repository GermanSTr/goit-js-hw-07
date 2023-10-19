import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");

function renderImg() {
  const galleryHTML = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source='${original}' alt="${description}"/></a></li>`;
  });
  galleryEl.innerHTML = galleryHTML.join("");
}
renderImg();

galleryEl.addEventListener("click", openModal);

function openModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const content = event.target.getAttribute("data-source");
  const instance = basicLightbox.create(
    `<img src=${content}></img>`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", ({ code }) => {
          if (code === "Escape") {
            instance.close();
          }
        });
      },
    },
    {
      onClose: (instance) => {
        window.removeEventListener("keydown", closeModal);
      },
    }
  );
  function closeModal(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
  instance.show();
}
