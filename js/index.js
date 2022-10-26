const clickButton = document.querySelectorAll('.button-compra')


clickButton.forEach(btn => {
    btn.addEventListener('click', addCarritoItem)
})

function addCarritoItem(e){
    const button = e.target
    const item = button.closest(".card")
}