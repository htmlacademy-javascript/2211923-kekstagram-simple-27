import { getData } from './api.js';
import { renderPictures } from './picture-render.js';
import { showErrorToast } from './message.js';

import './picture-modal.js';

getData(
  renderPictures,
  showErrorToast
);
