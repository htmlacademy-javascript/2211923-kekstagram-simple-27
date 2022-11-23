const BASE_URL = 'https://27.javascript.pages.academy/kekstagram-simple';

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
