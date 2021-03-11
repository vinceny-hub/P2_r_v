
// ************************page description*******************************************************
// recupération des données du serveur
    fetch ('http://localhost:3000/api/hotels')
    .then((response) => response.json())
    .then((data) => {
// récupération de l'_id sur l'URL de la page
      var search_params = new URLSearchParams(window.location.search); 
      let oursID = search_params.get('id');
      var search_params = new URLSearchParams(window.location.search);
        if(search_params.has('id')) {
        var id = search_params.getAll('id');
        // console.log(id)
        }
// oursID id de l'ourson sélectionné, déclaration de galOurs = données de l'ourson selectionné
        for (var i = 0; i < 1; i++){
        let galOurs = data.find(nId => {
        return nId._id === oursID            
        })
        // console.log(galOurs)
// stringify / parse 
        let dataStr = JSON.stringify(data)
        data = JSON.parse(dataStr)
        let galOursStr =JSON.stringify(galOurs)
        galOursParse = JSON.parse(galOursStr)
        // console.log(galOursParse)
      
//  liste des couleurs
        // liColors = galOurs.colors.length;
        // text = "<div class='dropdown'>";
        // for (i = 0; i < liColors; i++) {
        // text += "<a class='dropdown-item' href='#'>" + galOurs.colors[i] + "</a>";
        // }
        // text += "</div>";
// insertion page produit
        const oursonUnique = document.getElementById('oursonsProduit')
        oursonUnique.innerHTML = 
        `
        <div class="container">
        <h1 class="my-2"><small></small><strong class="nomProduit" font-weight-bold>${galOurs.name}</strong></h1>
          <div class="grid-container">
            <div class="grid-item">
              <div class="row imageProduit">
                <div class="col-md-8 ">
                  <img class="imageProduit" src=${galOurs.imageUrl} alt="">
                </div>
              </div>
            </div>
            <div class="grid-item">
              <div class="col-md-4 descriptionProduit">
                <h3 class="my-3">Description de l'ourson</h3>
                <p class="font-italic font-weight-bold descriptionText">${galOurs.description}</p>
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Couleurs disponibles
                  </button><div class="dropdown-menu" aria-labelledby="dropdownMenuButton"></div>
                </div>
                <p class="font-italic font-weight-bold priceText"><strong priceTextStrong>₽ ${galOurs.price}</strong></p>
                <button id="addCart" class="btn btn-info shop-item-button addToCartBtn addToCart">Ajouter au panier</button>
              </div>
            </div>
          </div>
        </div>
       
        `

   
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
            OP.push(galOursStr)
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
          var varIds = oursID
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
          var varPrice = galOurs.price
          // console.log(galOurs.price)
          var prices = JSON.parse(localStorage.getItem('prices'))
          const addToCartButton = document.getElementById('addCart')
          addToCartButton.addEventListener('click', async function() { 
            prices.push(varPrice) 
            localStorage.setItem('prices', JSON.stringify(prices)) 
          
          })
        }
        addCartPrice()
      }})
            
        
                    