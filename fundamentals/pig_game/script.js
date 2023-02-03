'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModalAll = document.querySelectorAll('.show-modal');
console.log(btnShowModalAll);

for (let b = 0; b < btnShowModalAll.length; b++) {
    btnShowModalAll[b].addEventListener('click', openModal);
}
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown',  (e) => {
    if(e.key === 'Escape' && !modal.classList.contains('Hidden')) {
        closeModal();
    }
});

function openModal() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

function closeModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
