import { EventHelper } from './util.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';

const fileField = document.querySelector('#upload-file');
const cancelBtn = document.querySelector('.img-upload__cancel');
const editModal = document.querySelector('.img-upload__overlay');
const uploadForm = document.querySelector('#upload-select-image');

const resetForm = () => {
  uploadForm.reset();
  resetScale();
  resetEffects();
};

const PhotoModal = {
  onEscapeKeyDown: (evt) => {
    if (EventHelper.isEscapeKey(evt)) {
      PhotoModal.closeModal();
    }
  },

  closeModal: () => {
    editModal.classList.add('hidden');
    document.body.classList.remove('modal-open');

    resetForm();

    document.removeEventListener('keydown', PhotoModal.onEscapeKeyDown);
  },

  openModal: () => {
    editModal.classList.remove('hidden');
    document.body.classList.add('modal-open');

    document.addEventListener('keydown', PhotoModal.onEscapeKeyDown);
  }
};

/**
 * Инициализация модального окна для загрузки фотографии
 */
const initUploadImageModal = () => {
  cancelBtn.addEventListener('click', PhotoModal.closeModal);
  fileField.addEventListener('change', PhotoModal.openModal);
};

export { initUploadImageModal };
