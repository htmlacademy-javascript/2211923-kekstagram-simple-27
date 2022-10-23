import {getRandomPictures} from './data.js';

// Шаблон изображения для отрисовки на странице
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

// Корнейвой элемент для списка изображений
const picturesListElement = document.querySelector('.pictures');
const picturesListFragment = document.createDocumentFragment();

// Сгенерированные случайные данные изображений
const pictures = getRandomPictures();

// Генерация списка элементов на основе данных
pictures.forEach(({url, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments;
  picturesListFragment.appendChild(pictureElement);
});

// Добавление списка на страницу
picturesListElement.appendChild(picturesListFragment);
