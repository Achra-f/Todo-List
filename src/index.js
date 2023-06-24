import './style.css';

const openModalButtons = document.querySelectorAll('.open-modal');
const closeModalButtons = document.querySelectorAll('.close-modal');
const modalOverlay = document.querySelector('.modal-overlay');

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modalId = button.dataset.modal;
    const modal = document.getElementById(modalId);
    modalOverlay.style.display = 'flex';
    modal.style.display = 'block';
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
    button.parentElement.style.display = 'none';
  });
});
