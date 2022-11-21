const imagePreview = document.querySelector('.img-upload__preview img');

const btnSmaller = document.querySelector('.scale__control--smaller');
const btnBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');

const SCALE_OPTIONS = {
  step: 25,
  min: 25,
  max: 100
};

const DEFAULT_SCALE = SCALE_OPTIONS.max;

const scaleImage = (value) => {
  scaleValue.value = `${value}%`;
  imagePreview.style.transform = `scale(${value / 100})`;
};

const addScale = (value) => {
  const intScaleValue = parseInt(scaleValue.value, 10);
  const newValue = intScaleValue + value;

  const {min, max} = SCALE_OPTIONS;

  if (newValue >= min && newValue <= max) {
    scaleImage(newValue);
  }
};

btnSmaller.addEventListener('click', () => {
  addScale(-SCALE_OPTIONS.step);
});

btnBigger.addEventListener('click', () => {
  addScale(SCALE_OPTIONS.step);
});

const resetScale = () => {
  scaleImage(DEFAULT_SCALE);
};

export { resetScale };
