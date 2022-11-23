import { sendData } from './api.js';
import { createErrorMessage, createSuccessMessage } from './message.js';

const uploadForm = document.querySelector('#upload-select-image');

/**
 * Функция инициализации обработчиков событий формы с пользовательской логикой.
 * При ошибке будет отображаться только блок с ошибкой
 * @param {Function} onSubmit callback при отправке формы
 */
const initForm = (onSubmit) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => {
        onSubmit();
        createSuccessMessage();
      },
      createErrorMessage,
      new FormData(evt.target)
    );
  });
};

/**
 * Функция для сброса формы
 */
const resetForm = () => uploadForm.reset();

export { resetForm, initForm };
