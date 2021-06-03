var elOpenModalButton = document.querySelector('.js-open-modal-button');
var elCloseModalButton = document.querySelector('.js-close-modal-button');
var elModal = document.querySelector('.js-modal');

elOpenModalButton.addEventListener('click', function () {
  elModal.classList.add('modal-open');
});

elCloseModalButton.addEventListener('click', function () {
  elModal.classList.remove('modal-open');
});


// fon o'zgartirish
var elChangeTextBgButton = document.querySelector('.js-change-text-bg');
var elText = document.querySelector('.text');

elChangeTextBgButton.addEventListener('click', function () {
  elText.classList.toggle('text-bg');
});
