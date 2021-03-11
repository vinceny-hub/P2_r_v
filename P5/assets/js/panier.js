
// *************************** insertion des items dans la page panier par le localStorage *************$

    if(localStorage.getItem('cartId') == "[]"){ 
      location.href ='index.html'
      // localStorage.clear('quantityOurs')
      alert("Panier vide redirection vers la page d'accueil")
    }else{ 
      let OP = JSON.parse(localStorage.getItem('cartId'))
      // console.log(localStorage.getItem('cartId'))
      let productContainer = document.querySelector('.container-ours')
      let tableData = ''
      tableData += ``
      OP.forEach(function (item, index, array) {
      var iPar = JSON.parse(item)
      var itemPar = JSON.parse(index)
      console.log(item)
      // console.log(iPar)
      tableData += 
      `
      
        <div class="product">
          <div class="row">
            <div class="col-md-3">
              <img class="img-fluid mx-auto d-block image" src="${iPar.imageUrl}">
            </div>
            <div class="col-md-7">
              <div class="info">
                <div class="row">
                  <div class="col-md-4 product h5">
                    <div class="product-name">
                      <a href="#">${iPar.name}</a>
                      <div class="product-info">
                          <div><span class="value"></span></div>
                          <div><span class="value"></span></div>
                          <div><span class="value"></span></div>
                      </div>
                    </div>
                  </div>
                <div class="col-md-5 quantity">
                <span class="price col-8 text-center" type="text" id="">₽ ${iPar.price} </span>
                </div>
                <div class="col-md-3 float-right">
                  <button class="btn btn-primary btn-sm removed price font-weight-light " id="${itemPar}">Supprimer</button>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
      `
      productContainer.innerHTML = tableData
  
      })
//******************* option suppression de produits *********************
    OP.forEach(function (item, index, array) {
    var iPar = JSON.parse(item)
    var itemPar = JSON.parse(index)
    idStr = JSON.stringify(iPar._id)
    let removeButton = document.querySelectorAll(".removed")
    removeButton[index].addEventListener('click', async function(e) { 
    removeItem(e)
    })
    var prices = JSON.parse(localStorage.getItem('prices'))
    function removeItem(e){
    if (e.target.classList.contains('removed')){
      if(confirm('are u sure to want to delete ?')){
        // console.log(e.target)
        if(e.target.id == itemPar){
          let itemParIndex = e.target.id
          const removeO = OP.splice(itemParIndex,1)
          localStorage.setItem('cartId', JSON.stringify(OP))
          const remove1 = prices.splice(itemParIndex,1)
          localStorage.setItem('prices', JSON.stringify(prices))
          const remove2 = ids.splice(itemParIndex,1)
          localStorage.setItem('ids', JSON.stringify(ids))
            // console.log(OP)
            // console.log(itemParIndex)
            // console.log(removeO)
            location.reload()
        }
      }
    }
    }
    })
// ******************************** somme des produits ************************$
    function montantTotal(){ 
    let pricesOurs = JSON.parse(localStorage.getItem('prices'))
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    // console.log(pricesOurs.reduce(reducer))
    let total = document.getElementById('total')
    let totalValidationBtn = document.getElementById('totalValidationBtn')
    let totalValidation = document.getElementById('totalValidation')
    total.innerText = `₽`+ pricesOurs.reduce(reducer)
    totalValidationBtn.innerText = `₽`+ pricesOurs.reduce(reducer)
    totalValidation.innerText = `₽`+ pricesOurs.reduce(reducer)
    }
    montantTotal()
    }
