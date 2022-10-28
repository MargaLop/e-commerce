const clickButtonCarrito = document.getElementById('shoppingCart')
console.log(clickButtonCarrito)

function openCarrito() {
    var x = document.getElementById("carrito");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

clickButtonCarrito.addEventListener('click', openCarrito)


