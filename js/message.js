import { EventHelper } from './util.js';

const successTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');

const errorTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');

const isBlockForClose = (element) => {
  const classList = [
    'success',
    'success__button',
    'error',
    'error__button',
  ];
  return classList.some((className) => element.classList.contains(className));
};

const createMessage = (messageBlock) => {
  const closeMessage = () => {
    messageBlock.remove();
  };

  messageBlock.addEventListener('click', (evt) => {
    if (isBlockForClose(evt.target)) {
      closeMessage();
    }
  });

  document.addEventListener('keydown', (evt) => {
    if (EventHelper.isEscapeKey(evt)) {
      closeMessage();
    }
  });

  document.body.append(messageBlock);
};

const createSuccessMessage = () => {
  const successMessage = successTemplate.cloneNode(true);
  createMessage(successMessage);
};

const createErrorMessage = () => {
  const errorMessage = errorTemplate.cloneNode(true);
  createMessage(errorMessage);
};

const showErrorToast = (message) => {
  const toast = document.createElement('div');
  toast.textContent = message;

  // Styling toast
  toast.style.top = 0;
  toast.style.width = '100%';
  toast.style.padding = '.25rem';
  toast.style.position = 'fixed';
  toast.style.textAlign = 'center';
  toast.style.backgroundColor = 'red';

  document.body.append(toast);
  setTimeout(() => toast.remove(), 3000);
};

const messageIsShown = () => document.querySelector('.success') || document.querySelector('.error');

export { createSuccessMessage, createErrorMessage, messageIsShown, showErrorToast };
