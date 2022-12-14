const menu = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

menu.forEach(buton => {
  buton.addEventListener('click', () => {
    const target = document.querySelector(buton.dataset.butonTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    menu.forEach(buton => {
      buton.classList.remove('active')
    })
    buton.classList.add('active')
    target.classList.add('active')
  })
})