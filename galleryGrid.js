const images = [
    'img/gallery/image01.png',
    'img/gallery/image02.png',
    'img/gallery/image03.png',
    'img/gallery/image04.png',
    'img/gallery/image05.png',
    'img/gallery/image06.png',
    'img/gallery/image07.png',
    'img/gallery/image08.png',
    'img/gallery/image09.png',
];


images.forEach(image => {
    const galleryGrid = document.getElementById('imageGalleryGrid')
    const imgElement = document.createElement('img');
    imgElement.src = image;
    imgElement.alt = 'Gallery image';
    galleryGrid.appendChild(imgElement);
});