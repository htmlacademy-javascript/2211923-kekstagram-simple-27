import { sendData } from './api.js';
import { createErrorMessage, createSuccessMessage } from './message.js';

const uploadForm = document.querySelector('#upload-select-image');
const formSubmit = document.querySelector('.img-upload__submit');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
});

/**
 * Функция инициализации обработчиков событий формы с пользовательской логикой.
 * При ошибке будет отображаться только блок с ошибкой
 * @param {Function} onSubmit callback при отправке формы
 */
const initForm = (onSubmit) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (!pristine.validate()) {
      return;
    }

    formSubmit.setAttribute('disabled', true);
    sendData(
      () => {
        onSubmit();
        createSuccessMessage();
        formSubmit.setAttribute('disabled', false);
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
