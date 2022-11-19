const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeItems = document.getElementById("product-list")
    const product = document.querySelectorAll(".card")
    const pname = storeItems.getElementsByTagName("p")

    for(var i = 0; i < pname.length; i++){
        let match = product[i].getElementsByTagName("p")[0];
        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                product[i].style.display ="";
            }else{
                product[i].style.display ="none";
            }
        }
    }
}
