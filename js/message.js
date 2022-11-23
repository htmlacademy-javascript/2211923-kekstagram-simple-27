import { EventHelper } from './util.js';

const successTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');

const errorTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');

/**
 * Функция для проверки, что элемент:
 * - область вне блока сообщения
 * - кнопка закрытия блока сообщения
 * @param {HTMLElement} element проверяемый элемент
 * @returns нужно ли закрыть при нажатии по элементу
 */
const isBlockForClose = (element) => {
  const classList = [
    'success',
    'success__button',
    'error',
    'error__button',
  ];
  return classList.some((className) => element.classList.contains(className));
};

/**
 * Отображение элемента с добавление обработчиков
 * @param {HTMLElement} messageBlock блок сообщения
 */
const createMessage = (messageBlock) => {

  const MessageWorker = {
    /**
     * Функция закрытия сообщения
     */
    closeMessage() {
      messageBlock.remove();
      document.removeEventListener('keydown', MessageWorker.onEscKeyDown);
    },

    /**
     * Обработчик нажатия клавиши ESC
     */
    onEscKeyDown(evt) {
      if (EventHelper.isEscapeKey(evt)) {
        MessageWorker.closeMessage();
      }
    }
  };

  // Закрытие блока при клике по кнопке или пустой области
  messageBlock.addEventListener('click', (evt) => {
    if (isBlockForClose(evt.target)) {
      MessageWorker.closeMessage();
    }
  });

  // Закрытие блока при нажатии клавиши ESC
  document.addEventListener('keydown', MessageWorker.onEscKeyDown);

  document.body.append(messageBlock);
};

/**
 * Создание сообщения об успешной операции
 */
const createSuccessMessage = () => {
  const successMessage = successTemplate.cloneNode(true);
  createMessage(successMessage);
};

/**
 * Создание сообщения об ошибки при выполнении операции
 */
const createErrorMessage = () => {
  const errorMessage = errorTemplate.cloneNode(true);
  createMessage(errorMessage);
};

/**
 * Показать сообщение в специальном блоке
 * @param {String} message сообщение
 */
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

/**
 * Проверка наличия сообщения об ошибке или успехе на странице
 * @returns есть ли сообщения на странице
 */
const messageIsShown = () => document.querySelector('.success') || document.querySelector('.error');

export { createSuccessMessage, createErrorMessage, messageIsShown, showErrorToast };
