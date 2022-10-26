const clickButton = document.querySelectorAll('.button-compra')
const tbody = document.querySelector('.tbody')
let carrito = []

clickButton.forEach(btn => {
    btn.addEventListener('click', addCarritoItem)
})

function addCarritoItem(e){
    const button = e.target
    const item = button.closest(".card")
    const itemTittle = item.querySelector('.card-tittle').textContent;
    console.log(itemTittle)
    const itemPrice = item.querySelector('.precio').textContent;
    console.log(itemPrice)
    const itemImg = item.querySelector('.top-bestseller').src;

    const newItem = {
        title: itemTittle,
        precio: itemPrice,
        img: itemImg,
        cantidad: 1
    }
    addItemCarrito(newItem)
}

function addItemCarrito(newItem){
    const inputElemnto = tbody.getElementsByClassName('input__element')
    for(let i =0; i < carrito.length ; i++){
        if(carrito[i].title.trim() === newItem.title.trim()){
          carrito[i].cantidad ++;
            console.log(carrito)
          return null;
        }
    }
    carrito.push(newItem)
    renderCarrito()
}

function renderCarrito(){
    tbody.innerHTML = ''
    carrito.map(item=>{
        consttr = document.createElement
        const tr = document.createElement('tr')
        tr.classList.add('itemCarrito')
        const content = `
            <th scope="row">1</th>
                <td class="table__productos">
                    <h6 class="title">${item.title}</h6>
                    <img src=${item.img} alt="" class="item-imagen__card">
                </td>
                <td class="table__price"><p>${item.precio}</p></td>
                <td class="table__cantidad>
                <input type="number" min="1" value=${item.cantidad} class="input__elemento">
                    <buttom class="delete btn btn-danger">x</buttom>
                </td>
        `
        tr.innerHTML = content
        tbody.append(tr)
    })
}