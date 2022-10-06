/**
 * Функция генерирует случайное значение в заданном диапазоне
 * @param {Number} start начальное значение диапазона
 * @param {Number} end конечное значение диапазона
 * @return случайное число или NaN в случаи ошибки
 */
const getRandomNumber = (start, end) => {
  // Проверка наличия переданных параметров
  if (!start || !end) {
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
 * @param {Number} maxSize максимальная длина строки
 * @param {Number} minSize минимальная длина строки (необязательный аргумент)
 * @returns соответствует ли длина строки требованиям.
 */
const validateTextLength = (text, maxSize, minSize) => {
  let isValide = text.length <= maxSize;
  if (minSize) {
    isValide = isValide && text.length >= minSize;
  }
  return isValide;
};

getRandomNumber();
validateTextLength();
