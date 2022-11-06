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

// Объект для работы с событиями
const EventHelper = {
  /**
   * Функция проверяет нажатие клавиши Escape пользователем
   * @param {Object} event событие
   * @param {String} event.key нажатая клавиша
   * @returns Является ли событие нажатием Escape
   */
  isEscapeKey: ({key}) => key === 'Escape',

  /**
   * Функция проверяет нажатие клавиши Enter пользователем
   * @param {Object} event событие
   * @param {String} event.key нажатая клавиша
   * @returns Является ли событие нажатием Enter
   */
  isEnterKey: ({key}) => key === 'Enter'
};

export {
  getRandomPositiveNumber,
  getRandomArrayElement,
  validateTextLength,
  EventHelper
};
