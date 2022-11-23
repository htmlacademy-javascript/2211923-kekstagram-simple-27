import { EventHelper } from './util.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import { resetForm, initForm } from './picture-form.js';
import { checkMessageIsShown } from './message.js';

const pictureField = document.querySelector('#upload-file');
const cancelButton = document.querySelector('.img-upload__cancel');
const pictureModal = document.querySelector('.img-upload__overlay');

/**
 * Функция для полного сброса состояния компонентов модального окна
 */
const resetState = () => {
  resetForm();
  resetScale();
  resetEffects();
};

// Объект управления модальным окном
const PhotoModal = {
  /**
   * Функция для обработки нажатия клавиши ESC
   * @param {Event} evt событие нажатия клавиши
   */
  onEscapeKeyDown: (evt) => {
    if (EventHelper.isEscapeKey(evt) && !checkMessageIsShown()) {
      PhotoModal.closeModal();
    }
  },

  /**
   * Метод закрытия модального окна
   */
  closeModal: () => {
    pictureModal.classList.add('hidden');
    document.body.classList.remove('modal-open');

    // Сброс формы при закрытии
    resetState();

    document.removeEventListener('keydown', PhotoModal.onEscapeKeyDown);
  },

  /**
   * Метод открытия модального окна
   */
  openModal: () => {
    pictureModal.classList.remove('hidden');
    document.body.classList.add('modal-open');

    document.addEventListener('keydown', PhotoModal.onEscapeKeyDown);
  }
};

// Обарботчики событий для открытия и закрытия модального окна
cancelButton.addEventListener('click', PhotoModal.closeModal);
pictureField.addEventListener('change', PhotoModal.openModal);

// Закрытие формы при успешной отправке
initForm(PhotoModal.closeModal);
