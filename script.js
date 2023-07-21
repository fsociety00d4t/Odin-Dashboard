let bell = document.querySelector('.bell');
let modal = document.querySelector('.modal');
let X = document.querySelector('.modal-x')
let msg = document.querySelector('.msg');
let msgModal = document.querySelector('.msgModal');
let msgX = document.querySelector('.msg-x');

const openModal = function () {
    modal.classList.remove('hidden');
}

const closeModal = function () {
      modal.classList.add("hidden");
}

const openMessage = function () {
    msgModal.classList.remove('hidden');
}

const closeMessage = function () {
    msgModal.classList.add('hidden');
}



bell.addEventListener('click',openModal);

X.addEventListener('click', closeModal);

msg.addEventListener('click',openMessage);

msgX.addEventListener('click',closeMessage);