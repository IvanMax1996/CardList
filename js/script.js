'use strict';

// Объявляем переменные
const cards = document.querySelectorAll('.card-item');
const contents = document.querySelectorAll('.block-item');
const lists = document.querySelectorAll('.list-item');
let indexPrevCard = null;

// Запускаем цикл слушателей
cards.forEach((card, i) => {
  card.addEventListener('click', () => {

    // Формируем новую карточку с анимацией
    if (contents[i].classList.contains('block-item_active')) {
      contents[i].classList.remove('block-item_visible');
      card.classList.remove('activeButton');
      card.classList.remove('hoverActive');
    
      setTimeout(() => {
        contents[i].classList.remove('block-item_active');
      }, 200);
    } else {
      contents[i].classList.add('block-item_active');
      card.classList.add('activeButton');

      setTimeout(() => {
        contents[i].classList.add('block-item_visible');
      }, 200);
      
    }
    
    // Удаляем предыдущую карточку
    if (contents[indexPrevCard] && contents[i] !== contents[indexPrevCard] ) {
      contents[indexPrevCard].classList.remove('block-item_active');
      contents[indexPrevCard ].classList.remove('block-item_visible');
    } 

    // Записываем индекс предыдущей карточки
    indexPrevCard  = i;
  });
});


// Удаление 'hover'
lists.forEach((list, i) => {
  list.addEventListener('mouseenter', () => {
    cards[i].classList.add('hoverActive');
  });
});