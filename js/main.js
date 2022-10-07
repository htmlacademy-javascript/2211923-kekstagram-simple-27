/**
 * Функция проверяет, что число не является отрицательным.
 * Значение должно быть конечным.
 * @param {Number} number проверяемое число
 * @returns является ли число положительным
 */
const isNotNegativeNumber = (number) => {
  if (typeof number !== 'number') {
    throw Error(`Параметр не является числом: ${number}`);
  }

  if (!Number.isFinite(number)) {
    throw Error(`Число не является конечным: ${number}`);
  }

  return number < 0;
};

/**
 * Функция генерирует случайное положительное число в заданном диапазоне
 * @param {Number} start начальное значение диапазона
 * @param {Number} end конечное значение диапазона
 * @return случайное число или NaN для невалидных параметров
 */
const getRandomPositiveNumber = (start, end) => {
  // Валидация переданных параметров
  if (isNotNegativeNumber(start) && isNotNegativeNumber(end)) {
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
