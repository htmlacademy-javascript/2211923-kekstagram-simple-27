import { getRandomArrayElement, getRandomPositiveNumber } from './util.js';

const PICTURES_NUMBER = 25;

// Набор описаний изображений для генерации данных
// Источник: https://rusability.ru/pfanshtil/200-fraz-podpisei-k-foto-i-selfi-v-sotssetyah/5fd295882dda593c3483dffb
const descriptions = [
  'Открываю для себя мир. Скоро вернусь',
  'Если я не найду выход, я его создам',
  'Если не сейчас, то когда? Если не я, то кто?',
  'Успех – встреча возможности и готовности действовать',
  'Чемпионы играют до тех пор, пока не получат желаемое',
  'Какая страна покорила ваше сердце?',
  'Лучшие моменты ждут вас за пределами зоны комфорта',
  'Нельзя купить счастье, но можно купить билеты на самолет',
  'Просто живу так, как считаю нужным',
  'Да, еще одно фото'
];

/**
 * Функция генерирует объект изображения со случайными данными
 * @param {Number} index идентификатор объекта
 * @returns объект изображения
 */
const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(descriptions),
  likes: getRandomPositiveNumber(15, 200),
  comments: getRandomPositiveNumber(0, 200),
});

/**
 * Функция генерирует массив случайных изображений
 * @returns массив объектов изображений
 */
const getRandomPictures = () =>
  Array.from({length: PICTURES_NUMBER}, (_, index) => createPicture(index + 1));

export { getRandomPictures };
