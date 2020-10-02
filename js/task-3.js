const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// -------Не верно--------(вставка происходит на каждой итерации цикла)

// for (let i = 0; i < images.length; i += 1) {
//   console.log(images[i]);
// }
// const itemsListRef = document.querySelector('#gallery');
// itemsListRef.insertAdjacentHTML(
//   'afterbegin',
//   `<li class = 'gallery-item'><img src="${images[i].url}" alt="${images[i].alt}" width="600"></li>`,
// );

// -------Не верно--------(вставка происходит на каждой итерации цикла)
// const galleryRef = document.querySelector('#gallery');

// const createGalleryList = images.map(img => {
//   const element = document.createElement('li');
//   element.insertAdjacentHTML(
//     'afterbegin',
//     `<li class = 'gallery-item'><img src="${img.url}" alt="${img.alt}" width="600">`,
//   );

//   return element;
// });

// const elements = createGalleryList;
// galleryRef.append(...elements);

// const galleryRef = document.querySelector('#gallery');
// const galleryList = images.map(img => {
//   return
//     `<li class = 'gallery-item'><img src="${img.url}" alt="${img.alt}" width="600">`,
//   ).join('');
// });
// galleryRef.insertAdjacentHTML('afterbegin', galleryList);

// Верно
const galleryRef = document.querySelector('#gallery');
const galleryList = images
  .map(({ url, alt }) => {
    return `<li class = 'gallery-item'><img src="${url}" alt="${alt}" width="600">`;
  })
  .join('');

galleryRef.insertAdjacentHTML('afterbegin', galleryList);
