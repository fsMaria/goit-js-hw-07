// перший варіант 
// const list = document.querySelector('#categories');
// console.log(`В списке ${list.children.length} категории`);
// [...list.children].forEach((el =>
//   console.log(`Категория:${el.firstElementChild.textContent}
// Количество элементов:${el.lastElementChild.children.length}`)
// ));

// друний варіант(читабельніший)
const list = document.querySelector('#categories');
const items = list.querySelectorAll('.item');
console.log(`В списке ${items.length} категории:`);
items.forEach(node => {
const h2 = node.querySelector('h2');
const nodeItems = node.querySelectorAll('li');
console.log(` - категория: ${h2.textContent} 
(количество элементов: ${nodeItems.length})`);
});