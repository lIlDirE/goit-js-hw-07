import { galleryItems } from './gallery-items.js';


const listEl = document.querySelector('.gallery');

const createImgEL = galleryItems
.map(image => `<div class="gallery__item" id="openModalbBtn"> <a class="gallery__link" href="${image.original}"> <img class="gallery__image" src="${image.preview}" data-source="${image.original}" alt="${image.description}"/></a></div>`)
.join('');

listEl.insertAdjacentHTML('beforeend', createImgEL);

document.body.addEventListener("click", (e) => {
	e.preventDefault()
})

const container = document.querySelector(`.js-container`);

container.addEventListener('click', onClick);

function onClick(evt){
	if (evt.target.nodeName !== `IMG`){
		return;
	}
		const instance = basicLightbox.create(`
		<img src="${evt.target.dataset.source}" width="800" height="600">
		`)

		instance.show();
}