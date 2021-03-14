
// ************************page description*******************************************************
// recupération des données du serveur
    fetch ('http://localhost:3000/api/hotels')
    
    .then((response) => response.json())
    .then((data) => {
// récupération de l'_id sur l'URL de la page
      var search_params = new URLSearchParams(window.location.search); 
      let productId = search_params.get('id');
      // var search_params = new URLSearchParams(window.location.search);
      //   if(search_params.has('id')) {
      //   var id = search_params.get('id');
      //   console.log(productId)
      //   }
// productId id du produit sélectionné, déclaration de product = données du poduit selectionné
        for (var i = 0; i < 1; i++){
        let  product = data.find(nId => {
        return nId._id === productId          
        })
        // console.log(product)
// stringify / parse 
        // let dataStr = JSON.stringify(data)
        // data = JSON.parse(dataStr)
           let productStr =JSON.stringify(product)
        // productParse = JSON.parse(productStr)
        // console.log(productParse)
      
//  liste des couleurs
        // liColors = product.colors.length;
        // text = "<div class='dropdown'>";
        // for (i = 0; i < liColors; i++) {
        // text += "<a class='dropdown-item' href='#'>" + product.colors[i] + "</a>";
        // }
        // text += "</div>";
// insertion page produit
        const productUnique = document.getElementById('productUnique')
        productUnique.innerHTML = 
        `
     
	
	
       
           
        <div class="r-conteneurProduct">
          <img class="item" src=${product.imageUrl} alt="Hôtel de la mer">
          <div class="captionProduct cap">
           <h2 class="hotel">${product.name}</h2>
            <p class="tarif">Nuit à partir de ${product.price}€</p>
             <div class="rating">
              <i class="fas fa-star" id="rating"></i>
              <i class="fas fa-star" id="rating"></i>
              <i class="fas fa-star" id="rating"></i>
              <i class="fas fa-star" id="rating"></i>
              <i class="fas fa-star" id="rating"></i>
             </div>
            </div>
       

      
            <div class="caption-2 cap">
              <div class="">
                <h3 class="">Description de la chambre</h3>
                <p class="">${product.description}</p>
            <!--    <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Couleurs disponibles
                  </button><div class="dropdown-menu" aria-labelledby="dropdownMenuButton"></div>
                </div>-->
              
               
              </div>
            
            </div>
            <div class="caption-3 cap">
            <h3>Nombre de nuitées</h3>
            <input type="number" id="nights" value="0"></input>
            </div>
            <button id="addCart" class="caption-4 cap">Réserver</button>
          </div>
         
       
       
        `
        const nightInput = document.querySelector('input');
        const log = document.getElementById('values');
        const orderButton = document.querySelector("#addCart")
        orderButton.disabled = true
        nightInput.addEventListener('input', updateValue);
       
        function updateValue(e) {
        if(nightInput.value>0){
          orderButton.disabled = false
        }else{
          orderButton.disabled = true
        }

        }

        // const nightInput = document.querySelector("#nights")
        // // const nightValues = document.getElementById('nights').value
        // nightInput.addEventListener(function() {
        // const orderButton = document.querySelector("#addCart")
        // if(nightInput.value===0){
        // orderButton.disabled = true

        // }
        // })
       
        console.log(nightInput)
        if(nightInput.value = 0){ 

        orderButton.disabled = true
        }
// *********************** Init local storage ******************************

        if(localStorage.getItem('cartId')){ 
          console.log('Panier Ok')
        }

        else{ 
          let init = []
          localStorage.setItem('cartId', JSON.stringify(init)) 
          console.log('création du panier')
        }
// ***********************************************************************
// ***********************set local storage ******************************        
      // produits ajoutés au panier par le localStorage
        var OP  = JSON.parse(localStorage.getItem('cartId'))
      
        function addCart(){ 
          const addToCartButton = document.getElementById('addCart')
          addToCartButton.addEventListener('click', async function() { 
            OP.push(productStr)
            localStorage.setItem('cartId', JSON.stringify(OP))
            alert('Added to Cart')
         
          }) 
        }   
        addCart()
        
        if(localStorage.getItem('ids')){ 
            console.log('ids présent')
        }else{ 
          let idInit = []
          localStorage.setItem('ids', JSON.stringify(idInit)) 
          console.log('création du ID array')
        }
      // _id(s) ajouté(s) au localStroage
        function addCartId(){ 
          var varIds = productId
          var ids = JSON.parse(localStorage.getItem('ids'))
          const addToCartButton = document.getElementById('addCart')
          addToCartButton.addEventListener('click', async function() { 
            ids.push(varIds) 
            localStorage.setItem('ids', JSON.stringify(ids, ('_id : '))) 
            // console.log(localStorage.setItem('ids', JSON.stringify(ids, ('_id : '))))
            location.reload()
            
          })
        }
        addCartId()

        if(localStorage.getItem('prices')){ 
            console.log('prices présent')
        }else{ 
          let pricesInit = []
          localStorage.setItem('prices', JSON.stringify(pricesInit)) 
          console.log('création du prices array')
        }
      // prix ajoutés au localStorage
        function addCartPrice(){ 
          var varPrice = product.price
          // console.log(product.price)
          var prices = JSON.parse(localStorage.getItem('prices'))
          const addToCartButton = document.getElementById('addCart')
          addToCartButton.addEventListener('click', async function() { 
            prices.push(varPrice) 
            localStorage.setItem('prices', JSON.stringify(prices)) 
          
          })
        }
        addCartPrice()
      }})
            
        
                    