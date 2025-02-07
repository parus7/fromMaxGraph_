//Бургер
const burger = document.getElementById('burger-btn')
const nav = document.querySelector('nav')

burger.addEventListener('click', function () {
  burger.classList.toggle('burger--active')
  nav.classList.toggle('nav--active')
})


// Модальное окно

const callFormBtn = document.getElementById('call-form')
const modalCallForm = document.getElementById('modal-call-form')

// Открыть модальное окно
callFormBtn.addEventListener('click', () => {
  modalCallForm.classList.add('modal-parent--open')
})

// Закрыть модальное окно по клику вокруг окна.
modalCallForm.querySelector('.modal').addEventListener("click", (event) => {
  event.isClick = true  // по клику на модальном окне создали дополнительное свойство и присвоили свойству true
})

modalCallForm.addEventListener("click", (event) => {
  if (event.isClick === true) return
  modalCallForm.classList.remove("modal-parent--open")
})

// Закрыть модальное окно по клавише "Escape"
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modalCallForm.classList.remove("modal-parent--open")
  }
})

// Галерея
const swiper = new Swiper("#gallery", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,

  navigation: {
    prevEl: "#gallery-prev",
    nextEl: "#gallery-next"
  }
})
