// Шаблон изображения для отрисовки на странице
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

// Корнейвой элемент для списка изображений
const picturesListElement = document.querySelector('.pictures');

/**
 * Функция для генерации HTML элемента изображения на основе объекта
 * @param {Object} picture объект изображения
 * @param {String} picture.url URL адрес изображения
 * @param {Number} picture.likes количество лайков
 * @param {Number} picture.comments количество комментариев
 * @returns HTML элемент изображения
 */
const createPictureElement = ({url, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments;
  return pictureElement;
};

/**
 * Отображение списка изображений на странице
 * @param {Array} pictures список изображений
 */
const renderPictures = (pictures) => {
  // Контейнер списка элементов
  const picturesListFragment = document.createDocumentFragment();

  // Генерация списка элементов на основе данных
  const elements = pictures.map(createPictureElement);

  // Добавление списка на страницу
  picturesListFragment.append(...elements);
  picturesListElement.appendChild(picturesListFragment);
};

export { renderPictures };
