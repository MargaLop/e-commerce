const clickButton = document.querySelectorAll('.button-compra')
let carrito = []

clickButton.forEach(btn => {
    btn.addEventListener('click', addCarritoItem)
})

function addCarritoItem(e){
    const button = e.target
    const item = button.closest(".card")
    const itemTittle = item.querySelector('.card-tittle').textContent;
    const itemPrice = item.querySelector('.precio').textContent;
    const itemImg = item.querySelector('.top-bestseller').src;
    console.log(itemImg)
    
}