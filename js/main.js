/**
 * Функция проверяет валидность числа.
 * Объект должен быть конечным числом.
 * @param {Number} number проверяемое число
 * @returns является ли number числом
 */
const isNumeric = (number) => typeof number === 'number' && Number.isFinite(number);

/**
 * Функция генерирует случайное положительное число в заданном диапазоне
 * @param {Number} start начальное значение диапазона
 * @param {Number} end конечное значение диапазона
 * @return случайное число или NaN для невалидных параметров
 */
const getRandomPositiveNumber = (start, end) => {
  // Валидация переданных параметров
  if (!isNumeric(start) || start < 0) {
    return NaN;
  }

  if (!isNumeric(end) || end < 0) {
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

getRandomPositiveNumber(1, 5);
validateTextLength('Hello, world!', 10);
