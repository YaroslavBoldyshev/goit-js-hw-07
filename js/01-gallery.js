import { galleryItems } from './gallery-items.js';
// Change code below this line
const galery = document.querySelector('.gallery');

function createMarkup(arr) {
    const markup = arr.map(item => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
    }).join('');
    return markup;
}
galery.innerHTML = createMarkup(galleryItems);
// console.log(createMarkup(galleryItems))
galery.addEventListener('click', openModal)

function openModal(e) {
  e.preventDefault();
  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source} " width="800" height="600">
`)
  const closeModal = (e) => {
    if (e.key === 'Escape') {
      instance.close();
    }
    window.removeEventListener('keydown', closeModal);
  }
  window.addEventListener('keydown', closeModal);
  instance.show();
}
