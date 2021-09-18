const images = [
    {
      url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];
  const gallery = document.querySelector( `#gallery` );
//  добавляємо стилі
  gallery.setAttribute( `style`, `list-style: none; display: flex; justify-content: space-between;` )
  const arrImages = images.reduce((liString, elem ) => liString + `<li><img src="${elem.url}" alt="${elem.alt}" width="350"></li>`, `` );
//  вставляємо картинки 
  gallery.insertAdjacentHTML(`afterbegin`, arrImages);
  console.log(gallery);