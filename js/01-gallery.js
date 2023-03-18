import { galleryItems } from './gallery-items.js';
// Change code below this line

// Разбей его на несколько подзадач:

// 1.Создание и рендер разметки по массиву данных galleryItems 
// и предоставленному шаблону элемента галереи.
// 2.Реализация делегирования на div.gallery и получение url большого изображения.
// 3.Подключение скрипта и стилей библиотеки модального окна basicLightbox. 
// Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные(.min) файлы библиотеки.
// 4.Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией 
// и примерами.
 // 5.Замена значения атрибута src элемента <img> в модальном окне перед открытием. 
// Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.



const galleryDivEl = document.querySelector('.gallery')
const galleryItemsToString = galleryItems.reduce((acc, {original,preview, description}) => {
    return acc+=`<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div> `
}, '');
galleryDivEl.insertAdjacentHTML('beforeend', galleryItemsToString)



galleryDivEl.onclick = (event) => {
  event.preventDefault();
   if (event.target.nodeName !== "IMG") {
        return
   }
  const elementDatasetSource = event.target.dataset.source;
  const html = `
		<img src="${elementDatasetSource}" width="800" height="600">
	`;

  const instance = basicLightbox.create(html, {
    onShow: (instance) => window.addEventListener("keydown", onEscKeydown),
    onClose: (instance) => window.removeEventListener("keydown",onEscKeydown)
  })
  instance.show((instance) => console.log('finished show()', instance))


  function onEscKeydown(event) {
    if (event.code !== "Escape") {
            return
        }
    instance.close()
  }
}
  