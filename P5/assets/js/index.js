
// ***************** récuperation des données du serveur  **********************************

fetch ('http://localhost:3000/api/hotels')
.then((res) => res.json())
.then((data) => {
 
  for (i=0; i<data.length; i++){ 
    console.log(data[i])
    let itemH = document.createElement('a')
    itemH.className = "class='item' href='produit.html?id=${data[i]._id}"
    itemH.setAttribute('href', `produit.html?id=${data[i]._id}`)
    itemH.innerHTML =
        `
       <img class="vignette-g" src=${data[i].imageUrl} alt="Hôtel de la mer" >
       <div class="caption">
         <h4 class="hotel">${data[i].name}</h4>
         <p class="tarif">Nuit à partir de ${data[i].price}€</p>
         <div class="rating">
           <i class="fas fa-star" id="rating"></i>
           <i class="fas fa-star" id="rating"></i>
           <i class="fas fa-star" id="rating"></i>
           <i class="fas fa-star" id="rating"></i>
           <i class="fas fa-star" id="rating"></i>
        </div>
       </div>
      `
     
  const items = document.getElementById('conteneurHotel')
  items.append(itemH)

  }
})

fetch ('http://localhost:3000/api/activities')
.then((res) => res.json())
.then((data) => {
  
  for (i=0 ; i <1 ;i++){ 
    let itemsAc = []

    let itemAc1 = document.createElement('a')
    itemAc1.className=  "item-ac1"
    itemAc1.setAttribute('href', `produit.html?id=${data[0]._id}`)

    let imgAc1 = document.createElement('img')
    imgAc1.className = "vignette-g-ac1"
    imgAc1.src = `${data[0].imageUrl}`

    let captionAc1 = document.createElement('div')
    captionAc1.className = "caption-ac"

    let nameAc1 = document.createElement('h4')
    nameAc1.className = "titre-ac"

    nameAc1.innerText = `${data[0].name}`
    captionAc1.append(nameAc1)

    itemAc1.append(imgAc1,captionAc1)
    

    let itemAc2 = document.createElement('a')
    itemAc2.className=  "item-ac2"
    itemAc2.setAttribute('href', `produit.html?id=${data[1]._id}`)

    let imgAc2 = document.createElement('img')
    imgAc2.className = "vignette-g-ac2"
    imgAc2.src = `${data[1].imageUrl}`

    let captionAc2 = document.createElement('div')
    captionAc2.className = "caption-ac"

    let nameAc2 = document.createElement('h4')
    nameAc2.className = "titre-ac"

    nameAc2.innerText = `${data[1].name}`
    captionAc2.append(nameAc2)

    itemAc2.append(imgAc2,captionAc2)



    let itemAc3 = document.createElement('a')
    itemAc3.className=  "item-ac3"
    itemAc3.setAttribute('href', `produit.html?id=${data[2]._id}`)

    let imgAc3 = document.createElement('img')
    imgAc3.className = "vignette-g-ac3"
    imgAc3.src = `${data[2].imageUrl}`

    let captionAc3 = document.createElement('div')
    captionAc3.className = "caption-ac"

    let nameAc3 = document.createElement('h4')
    nameAc3.className = "titre-ac"

    nameAc3.innerText = `${data[2].name}`
    captionAc3.append(nameAc3)

    itemAc3.append(imgAc3,captionAc3)



    let itemAc4 = document.createElement('a')
    itemAc4.className=  "item-ac4"
    itemAc4.setAttribute('href', `produit.html?id=${data[3]._id}`)

    let imgAc4 = document.createElement('img')
    imgAc4.className = "vignette-g-ac4"
    imgAc4.src = `${data[3].imageUrl}`

    let captionAc4 = document.createElement('div')
    captionAc4.className = "caption-ac"

    let nameAc4 = document.createElement('h4')
    nameAc4.className = "titre-ac"

    nameAc4.innerText = `${data[3].name}`
    captionAc4.append(nameAc4)

    itemAc4.append(imgAc4,captionAc4)



    let itemAc5 = document.createElement('a')
    itemAc5.className=  "item-ac5"
    itemAc5.setAttribute('href', `produit.html?id=${data[4]._id}`)

    let imgAc5 = document.createElement('img')
    imgAc5.className = "vignette-g-ac5"
    imgAc5.src = `${data[4].imageUrl}`

    let captionAc5 = document.createElement('div')
    captionAc5.className = "caption-ac"

    let nameAc5 = document.createElement('h4')
    nameAc5.className = "titre-ac"

    nameAc5.innerText = `${data[4].name}`
    captionAc5.append(nameAc5)

    itemAc5.append(imgAc5,captionAc5)


    let itemAc6 = document.createElement('a')
    itemAc6.className=  "item-ac6"
    itemAc6.setAttribute('href', `produit.html?id=${data[5]._id}`)

    let imgAc6 = document.createElement('img')
    imgAc6.className = "vignette-g-ac6"
    imgAc6.src = `${data[5].imageUrl}`

    let captionAc6 = document.createElement('div')
    captionAc6.className = "caption-ac"

    let nameAc6 = document.createElement('h4')
    nameAc6.className = "titre-ac"

    nameAc6.innerText = `${data[5].name}`
    captionAc6.append(nameAc6)

    itemAc6.append(imgAc6,captionAc6)

    // let itemAc4 = document.createElement('a')
    // itemAc4.className=  "item-ac4"
    // itemAc4.setAttribute('href', `produit.html?id=${data[3]._id}`)

    // let itemAc5 = document.createElement('a')
    // itemAc5.className=  "item-ac5"
    // itemAc5.setAttribute('href', `produit.html?id=${data[4]._id}`)

    // let item6 = document.createElement('a')
    // item6.className=  "item-ac6"
    // item6.setAttribute('href', `produit.html?id=${data[5]._id}`)

    itemsAc.push(itemAc1,itemAc2,itemAc3,itemAc4,itemAc5,itemAc6)
   
    const itemAc = document.getElementById('activités')
    itemAc.append(itemAc1,itemAc2,itemAc3,itemAc4,itemAc5,itemAc6)
  }
})

fetch ('http://localhost:3000/api/populaires')
.then((res) => res.json())
.then((dataAs) => {
  console.log(dataAs)

  for (i=0; i<3; i++){ 
    let itemAs = document.createElement('a')
    itemAs.className =  "class='item-as'"
    itemAs.setAttribute('href', `produit.html?id=${dataAs[i]._id}`)
    itemAs.innerHTML = 
  
    `
    
     
     <img class="vignette-g-a" src=${dataAs[i].imageUrl} alt="Hôtel de la mer">
     <div class="caption-a">
     <h4 class="hotel">${dataAs[i].name}</h4>
     <p class="tarif">Nuit à partir de ${dataAs[i].price}€</p>
       <div class="rating-a">
         <i class="fas fa-star" id="rating"></i>
         <i class="fas fa-star" id="rating"></i>
         <i class="fas fa-star" id="rating"></i>
         <i class="fas fa-star" id="rating"></i>
         <i class="fas fa-star" id="rating"></i>
       </div>
     </div>
  
            
      
   
    `
    const itemsAs = document.getElementById('conteneurHotelAs')
    itemsAs.append(itemAs)
    }
  })


// function createListItem

      // *********************** Init local storage ******************************

  if(localStorage.getItem('cartId')){ 
  console.log('Panier Ok')
  }

  else{ 
  let init = []
  localStorage.setItem('cartId', JSON.stringify(init)) 
  console.log('création du panier')
  }

    // *********************** Fin init local storage ******************************