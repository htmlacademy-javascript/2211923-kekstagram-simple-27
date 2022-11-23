const BASE_URL = 'https://27.javascript.pages.academy/kekstagram-simple';

/**
 * Функция для получения списка изображений
 * @param {Function} onSuccess callback при успешном запросе
 * @param {Function} onFail callback при ошибке запроса
 */
const getData = (onSuccess, onFail) => {
  fetch(`${BASE_URL}/data`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((pictures) => {
      onSuccess(pictures);
    })
    .catch((err) => onFail(`Ошибка при загрузке данных: ${err.message}`));
};

/**
 * Функция для отправки данных формы
 * @param {Function} onSuccess callback при успешной отправке
 * @param {Function} onFail callback при ошибке отправки данных
 * @param {FormData} body данные формы для отправки
 */
const sendData = (onSuccess, onFail, body) => {
  fetch(
    BASE_URL,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        return;
      }

      throw new Error(`${response.status} ${response.statusText}`);
    })
    .catch((err) => {
      onFail(`Ошибка при отправке данных: ${err}`);
    });
};

export {getData, sendData};
