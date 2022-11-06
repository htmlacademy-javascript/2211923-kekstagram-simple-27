import { getRandomPictures } from './data.js';
import { renderPictures } from './pictures.js';
import { initUploadImageModal } from './upload-image.js';

renderPictures(getRandomPictures());
initUploadImageModal();
