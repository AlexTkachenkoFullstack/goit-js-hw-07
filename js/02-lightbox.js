import { galleryItems } from './gallery-items.js';
// Change code below this line


// Выполняй это задание в файлах 02-lightbox.html и 02-lightbox.js. Разбей его на несколько подзадач:

// 1.Создание и рендер разметки по массиву данных galleryItems 
// и предоставленному шаблону элемента галереи.Используй готовый код из первого задания.
// 2.Подключение скрипта и стилей библиотеки используя CDN сервис cdnjs.
// Необходимо добавить ссылки на два файла: simple - lightbox.min.js и simple - lightbox.min.css.
// 3.Инициализация библиотеки после того как элементы галереи созданы 
// и добавлены в ul.gallery.Для этого ознакомься с документацией SimpleLightbox -
// в первую очередь секции «Usage» и «Markup».
// 4.Посмотри в документации секцию «Options» и добавь отображение 
// подписей к изображениям из атрибута alt.Пусть подпись будет снизу и появляется 
// через 250 миллисекунд после открытия изображения.

const galleryEl = document.querySelector(".gallery")
const galleryItemsToString = galleryItems.reduce((acc, {preview, original, description}) => {
    return acc+=`<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" 
            src="${preview}" 
            alt="${description}" 
        />
   </a>
</li>`
}, "")

galleryEl.insertAdjacentHTML("beforeend", galleryItemsToString)

let gallery = new SimpleLightbox('.gallery a', {captionsData: "alt",  captionPosition:"bottom", captionDelay: 250,  scrollZoom: false});

gallery.on('shown.simplelightbox', function (event) {
  event.preventDefault();
  console.log("Everything works fine")
});

gallery.on('error.simplelightbox', function (event) {
	console.log(event, "Something wrong"); 
});
