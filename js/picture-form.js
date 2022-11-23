import { sendData } from './api.js';
import { createErrorMessage, createSuccessMessage } from './message.js';

const uploadForm = document.querySelector('#upload-select-image');

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

const resetForm = () => uploadForm.reset();

export { resetForm, initForm };
