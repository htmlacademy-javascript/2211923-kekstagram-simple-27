const pictureEffects = {
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
};

const getStyleString = (name, value) => {
  const selectedEffect = pictureEffects[name];
};
