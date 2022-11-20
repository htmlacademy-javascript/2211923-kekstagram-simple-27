import { EventHelper } from './util.js';

const fileField = document.querySelector('#upload-file');
const cancelBtn = document.querySelector('.img-upload__cancel');
const editModal = document.querySelector('.img-upload__overlay');
const uploadForm = document.querySelector('#upload-select-image');
const imagePreview = document.querySelector('.img-upload__preview img');

// Scale controls
const btnSmaller = document.querySelector('.scale__control--smaller');
const btnBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');

// Slider controls
const effectsContainer = document.querySelector('.img-upload__effects');
const sliderElement = document.querySelector('.effect-level__slider');
const sliderValue = document.querySelector('.effect-level__value');

const PhotoEditOptions = {
  scale: {
    step: 25,
    min: 25,
    max: 100
  },
  slider: null,
  effects: {
    'chrome': {
      range: {
        'min': 0,
        'max': 1
      },
      step: 0.1,
      effect: 'grayscale'
    },
    'sepia': {
      range: {
        'min': 0,
        'max': 1
      },
      step: 0.1,
      effect: 'sepia'
    },
    'marvin': {
      range: {
        'min': 0,
        'max': 100
      },
      step: 1,
      prefix: '%',
      effect: 'invert'
    },
    'phobos': {
      range: {
        'min': 0,
        'max': 3
      },
      step: 0.1,
      prefix: 'px',
      effect: 'blur'
    },
    'heat': {
      range: {
        'min': 1,
        'max': 3
      },
      step: 0.1,
      effect: 'brightness'
    },
  }
};

const updateScale = (value) => {
  const intScaleValue = parseInt(scaleValue.value, 10);
  const newValue = intScaleValue + value;

  const {min, max} = PhotoEditOptions.scale;

  if (newValue >= min && newValue <= max) {
    scaleValue.value = `${newValue}%`;
    imagePreview.style.transform = `scale(${newValue / 100})`;
  }
};

btnSmaller.addEventListener('click', () => {
  updateScale(-PhotoEditOptions.scale.step);
});

btnBigger.addEventListener('click', () => {
  updateScale(PhotoEditOptions.scale.step);
});

const resetSlider = () => {
  // Reset preview styling
  imagePreview.classList = '';
  imagePreview.style = null;

  // Destroy slider
  if (sliderElement.noUiSlider) {
    sliderElement.noUiSlider.destroy();
  }
};

const updateSlider = (options) => {
  if (sliderElement.noUiSlider) {
    sliderElement.noUiSlider.updateOptions(options);
  } else {
    noUiSlider.create(sliderElement, options);
  }
};

effectsContainer.addEventListener('change', (evt) => {
  const effect = evt.target.value;
  const effectOptions = PhotoEditOptions.effects[effect];

  if (!effectOptions) {
    resetSlider();
    return;
  }

  imagePreview.className = `effects__preview--${effect}`;

  const options = {
    ...effectOptions,
    connect: 'upper',
    start: effectOptions.range.max
  };
  updateSlider(options);

  const slider = sliderElement.noUiSlider;
  slider.off('update');
  slider.on('update', () => {
    sliderValue.value = slider.get();
    imagePreview.style.filter = `${options.effect}(${sliderValue.value}${options.prefix || ''})`;
  });
});

const resetForm = () => {
  uploadForm.reset();
  imagePreview.style.transform = '';
  resetSlider();
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
