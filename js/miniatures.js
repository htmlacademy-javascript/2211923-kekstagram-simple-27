const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

export const renderPicturesMiniatures = (pictures, container) => {
  const picturesList = document.createDocumentFragment();

  pictures.forEach(({url, likes, comments}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureTemplate.querySelector('.picture__img').src = url;
    pictureTemplate.querySelector('.picture__likes').textContent = likes;
    pictureTemplate.querySelector('.picture__comments').textContent = comments;
    picturesList.appendChild(pictureElement);
  });

  container.appendChild(picturesList);
};
