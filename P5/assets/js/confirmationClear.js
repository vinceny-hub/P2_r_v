
// ******************************* effacement des données après avoir quitter la page par le bouton *******************************
function closeAll(){ 
  const closeTab = document.getElementById('closeTab')
  closeTab.addEventListener('click', async function() { 
  alert('merci pour votre achat, redirection vers la page d\'accueil')
  localStorage.removeItem('cartId'),
  localStorage.removeItem('prices'),
  localStorage.removeItem('formulaire'),
  localStorage.removeItem('ids'),
  localStorage.removeItem('orderIdInformation'),
  location.href = "index.html"
  })
}
closeAll()

// ************************** insertion des informations de confirmation via localStorage orderIdInformation *************************
// console.log(localStorage.getItem('orderIdInformation'))
let informationOrder = JSON.parse(localStorage.getItem('orderIdInformation'))
// console.log(informationOrder[0])
informationOrder.forEach(function (i,item, index, array) {
  var iOrder = JSON.parse(i)
  // console.log(iOrder.contact.firstName)
  let productConfirmation = document.querySelector('.confirmation')
  productConfirmation.innerHTML += 
    `
    <!-- Injection list nounours dans le panier-->
    <section class="">
      <div class="container">
        <div class="row h-100 align-items-center">
          <div class="col-12">
           
            <h1 class="font-weight-bold prenomText">${iOrder.contact.firstName}</h1>
            <!--<button type="button" id="closeTab" class="btn btn-primary btn-lg buttonClose buttonCloseTop">Merci et à bientôt sur notre site</button>-->
            <h2 class="">Nous vous remercions pour votre achat</h2>
            <div class="grid-container">
            <span class="lead">Votre numéro de commande est :</span>
            <p class="lead font-weight-bold orderIdText">${iOrder.orderId}</p>
            </div>
            <h2 class="font-weight-light recapitulatifText">Récapitulatif de votre commande :</h2>
            <div class="récapitulatif"></div>
            <h3 class="font-weight-normal" id="totalOrder"></h3>
          </div>  
        </div>
      
    `   
    })
// ************************** insertion des informations de confirmation via localStorage cardId (récapitulatif du panier)*************************
    let OP = JSON.parse(localStorage.getItem('cartId'))
    OP.forEach(function (i,item, index, array) {
      var iPar = JSON.parse(i)
      var itemPar = JSON.parse(item)
      // console.log(iPar.name)
      for(i=0; i<iPar.length;i++){ 
      // console.log(iPar.length)
      }
      // console.log(iPar)
    let productsRécapitulatif = document.querySelector('.récapitulatif')
    productsRécapitulatif.innerHTML += 
     `
        <ul>
          <li>                        
            <div class="product">
              <div class="row">
                <div class="col-md-1 item">
                  <img class="vignette" src="${iPar.imageUrl}">
                </div>
                <div class="col-md-8">
                  <div class="info">
                    <div class="row">
                      <div class="col-md-4 product h5">
                        <div class="product-name">
                          <a href="#">${iPar.name}</a>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    `
    })
// ************************** insertion des informations de confirmation via localStorage prices (somme) *************************
    let pricesOurs = JSON.parse(localStorage.getItem('prices'))
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    let totalOrder = document.getElementById('totalOrder')
    totalOrder.innerText = `Montant total : ₽ ${pricesOurs.reduce(reducer)}`

          
