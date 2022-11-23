const BASE_URL = 'https://27.javascript.pages.academy/code-and-magick';

const getData = (onSuccess, onFail) => {
  fetch(`${BASE_URL}/data`)
    .then((response) => response.json())
    .then((pictures) => {
      onSuccess(pictures);
    })
    .catch((err) => onFail(err));
};

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

      throw new Error(`${response.status} ${response.err}`);
    })
    .catch((err) => {
      onFail(`Ошибка при отправке данных: ${err}`);
    });
};

export {getData, sendData};
