const imagePreview = document.querySelector('.img-upload__preview img');

const effectsContainer = document.querySelector('.img-upload__effects');
const sliderElement = document.querySelector('.effect-level__slider');
const sliderValue = document.querySelector('.effect-level__value');

const EFFECTS = {
  'none': {
    min: 0,
    max: 1,
    step: 1
  },
  'chrome': {
    min: 0,
    max: 1,
    step: 0.1,
    effect: 'grayscale'
  },
  'sepia': {
    min: 0,
    max: 1,
    step: 0.1,
    effect: 'sepia'
  },
  'marvin': {
    min: 0,
    max: 100,
    step: 1,
    prefix: '%',
    effect: 'invert'
  },
  'phobos': {
    min: 0,
    max: 3,
    step: 0.1,
    prefix: 'px',
    effect: 'blur'
  },
  'heat': {
    min: 1,
    max: 3,
    step: 0.1,
    effect: 'brightness'
  },
};
const DEFAULT_EFFECT = 'none';

/**
 * Функция для генерации стиля элемента
 * @param {String} name название эффекта
 * @param {String|Integer} value значение показателя фильтра
 * @returns строковое значение стиля
 */
const buildStyle = (name, value) => {
  const options = EFFECTS[name];
  if (!options || !options.effect) {
    return '';
  }
  return `${options.effect}(${value}${options.prefix || ''})`;
};

/**
 * Функция генерации параметров noUiSlider для эффекта
 * @param {String} name название эффекта
 * @returns объект конфигурации noUiSlider
 */
const getSliderOptions = (name) => {
  const effectOptions = EFFECTS[name];
  if (!effectOptions) {
    return {};
  }

  return {
    range: {
      min: effectOptions.min,
      max: effectOptions.max
    },
    step: effectOptions.step,
    start: effectOptions.max
  };
};

// Текущий эффект
let currentEffect = DEFAULT_EFFECT;

// Создание слайдера
noUiSlider.create(sliderElement, getSliderOptions('none'));

// Сокрытие слайдера по умолчанию
sliderElement.classList.add('hidden');

// Обновление фильтра при изменении ползунка
sliderElement.noUiSlider.on('update', () => {
  sliderValue.value = sliderElement.noUiSlider.get();
  imagePreview.style.filter = buildStyle(currentEffect, sliderValue.value);
});

/**
 * Функция для обновления состояния слайдера
 */
const updateSlider = () => {
  imagePreview.className = `effects__preview--${currentEffect}`;

  sliderElement.noUiSlider.updateOptions(getSliderOptions(currentEffect));

  // Скрытие ползунка если фильтр не выбран
  if (currentEffect === 'none') {
    sliderElement.classList.add('hidden');
  } else {
    sliderElement.classList.remove('hidden');
  }
};

// Обработчик смены фильтров
effectsContainer.addEventListener('change', (evt) => {
  currentEffect = evt.target.value;
  updateSlider();
});

/**
 * Функция для сброса эффектов
 */
const resetEffects = () => {
  currentEffect = DEFAULT_EFFECT;
  updateSlider();
};

export { resetEffects };
