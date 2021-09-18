const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  // створюємо окремі li
  const itemOne = document.createElement('li');
  itemOne.textContent = 'Картошка';
  
  const itemTwo = document.createElement('li');
  itemTwo.textContent = 'Грибы';
  
  const itemThree = document.createElement('li');
  itemThree.textContent = 'Чеснок';
  
  const itemFour = document.createElement('li');
  itemFour.textContent = 'Помидоры';
  
  const itemFive = document.createElement('li');
  itemFive.textContent = 'Зелень';
  
  const itemSix = document.createElement('li');
  itemSix.textContent = 'Приправы';
  
  // добавляємо li-шки в ul
  const parentEl = document.querySelector('ul');
  parentEl.append(itemOne, itemTwo, itemThree, itemFour, itemFive, itemSix)
  console.log(parentEl);