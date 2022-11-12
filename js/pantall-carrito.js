const clickButtonCarrito = document.getElementById('shoppingCart')

function openCarrito() {
    var x = document.getElementById("carrito");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

clickButtonCarrito.addEventListener('click', openCarrito)

$('button.button-carrito').click(function(){
      $('.secciones article').hide();
});