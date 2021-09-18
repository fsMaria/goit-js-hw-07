const list = document.querySelector('#categories');
console.log(`В списке ${list.children.length} категории`);
[...list.children].forEach((el =>
  console.log(`Категория:${el.firstElementChild.textContent}
Количество элементов:${el.lastElementChild.children.length}`)
));