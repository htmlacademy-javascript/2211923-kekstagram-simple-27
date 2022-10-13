/**
 * Функция проверяет валидность числа.
 * Объект должен быть конечным числом.
 * @param {Number} anyValue проверяемое число
 * @returns является ли number числом
 */
const isNumeric = (anyValue) => typeof anyValue === 'number' && Number.isFinite(anyValue);

/**
 * Функция генерирует случайное положительное число в заданном диапазоне
 * @param {Number} start начальное значение диапазона
 * @param {Number} end конечное значение диапазона
 * @return случайное число или NaN для невалидных параметров
 */
const getRandomPositiveNumber = (start, end) => {
  // Валидация переданных параметров
  const paramsIsNumeric = isNumeric(start) && isNumeric(end);
  const paramsIsPositive = start >= 0 && end >= 0;

  if (!paramsIsNumeric || !paramsIsPositive || Math.abs(start - end) < 1) {
    return NaN;
  }

  // Получение целочисленного максимального и минимального значения диапазона
  const min = Math.ceil(Math.min(start, end));
  const max = Math.floor(Math.max(start, end));
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Функция проверяет допустимость длины строки
 * @param {String} text проверяемая строка
 * @param {Number} length максимальная длина строки
 * @returns является ли длина строки меньше заданного значения.
 */
const validateTextLength = (text, length) => text.length <= length;

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
 * Функция для получения случайного элемента из массива
 * @param {Array} array массив с данными
 * @returns случайны элемент
 */
const getRandomArrayElement = (array) => {
  if (!Array.isArray(array) || array.length === 0) {
    return undefined;
  }

  if (array.length === 1) {
    return array[0];
  }

  const index = getRandomPositiveNumber(0, array.length - 1);
  return array[index];
};

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

const PICTURES_NUMBER = 25;

/**
 * Функция генерирует массив случайных изображений
 * @returns массив объектов изображений
 */
const getRandomPictures = () =>
  Array.from({length: PICTURES_NUMBER}, (_, index) => createPicture(index + 1));

validateTextLength('Hello, world!', 10);
getRandomPictures();
