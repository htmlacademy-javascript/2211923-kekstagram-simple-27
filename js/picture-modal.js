import { EventHelper } from './util.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import { resetForm, initForm } from './picture-form.js';
import { messageIsShown } from './message.js';

const pictureField = document.querySelector('#upload-file');
const cancelButton = document.querySelector('.img-upload__cancel');
const pictureModal = document.querySelector('.img-upload__overlay');

const resetState = () => {
  resetForm();
  resetScale();
  resetEffects();
};

const PhotoModal = {
  onEscapeKeyDown: (evt) => {
    if (EventHelper.isEscapeKey(evt) && !messageIsShown()) {
      PhotoModal.closeModal();
    }
  },

  closeModal: () => {
    pictureModal.classList.add('hidden');
    document.body.classList.remove('modal-open');

    resetState();

    document.removeEventListener('keydown', PhotoModal.onEscapeKeyDown);
  },

  openModal: () => {
    pictureModal.classList.remove('hidden');
    document.body.classList.add('modal-open');

    document.addEventListener('keydown', PhotoModal.onEscapeKeyDown);
  }
};

cancelButton.addEventListener('click', PhotoModal.closeModal);
pictureField.addEventListener('change', PhotoModal.openModal);
initForm(PhotoModal.closeModal);
