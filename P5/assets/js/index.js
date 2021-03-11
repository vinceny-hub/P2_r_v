
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
    // = document.getElementById('conteneurHotel')
    // let products = []
    // let photoHotel = document.querySelector('.vignette-g');
    // photoHotel.src= data[i].imageUrl
    // photoHotel.appendchild(conteneurHotel)

    // photoHotel.innerHTML = `<img src=${data[i].name}>`


    // let nomHotel = document.createElement('h4')
    // let nomHotelTexte = document.createTextNode('djpojosdjgogj')
    // // let titreHotel = document.querySelector('.hotel');
    // // titreHotel.innerHTML = `<h4 class="hotel">${data[i].name}</h4>`
    // nomHotel.appendchild(nomHotelTexte)
    // titreHotel.innerHTML = `<h4 class="hotel">${data[i].name}</h4>`
    // let tarifHotel = document.querySelector('.tarif');
    // tarifHotel.innerHTML = `<p class="hotel">${data[i].price}</p>`
    // listOfproducts = products.push(data[i])  
    // document.getElementById('conteneurHotel').appendChild(products) = innerHTML
    // document.body.appendChild(listOfproducts)
    // console.log(products)

    // document.getElementById('conteneurHotel')
    // products.appendChild(Product)  // document.body.insertBefore(photoHotel,conteneurHotel)
  
    // titreHotel.appendChild(contenuTitreHotel)
    // document.body.appendChild(titreHotel)

      // const getOursons = document.getElementById('oursonsList')
      // getOursons.innerHTML += 
      //   `
      //   <div class="col-12 col-md-6 col-lg-4 mb-4">
      //     <div class="card h-100">
      //       <a href="produit.html?id=${data[i]._id}"><img src=${data[i].imageUrl} class="card-img-top img-size"></a>
      //       <div class="card-body">
      //         <p class="card-title h3 font-weight-bold">
      //           <a href="produit.html?id=${data[i]._id}">${data[i].name}</a>
      //         </p>
      //         <span class="font-weight-bold lead">₽ ${data[i].price}</span>
      //         <p class="card-text font-italic font-weight-bold">${data[i].description}</p>
      //       <!--<button class="btn btn-info shop-item-button">Ajouter au panier</button>-->
      //       </div>
      //     </div>
      //   </div>
      //   `
        // getOursons.appendChild()

      `
      
       
       <img class="vignette-g" src=${data[i].imageUrl} alt="Hôtel de la mer" >
       <div class="caption">
         <h4 class="hotel">${data[i].name}</h4>
         <p class="tarif">${data[i].price}</p>
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
  
  for (i=0; i<3; i++){ 
  let itemAs = document.createElement('a')
  itemAs.className =  "class='item-as'"
  itemAs.setAttribute('href', `produit.html?id=${data[i]._id}`)
  itemAs.innerHTML = 

  `
  
   
   <img class="vignette-g-a" src=${data[i].imageUrl} alt="Hôtel de la mer" >
   <div class="caption-a">
   <h4 class="hotel">${data[i].name}</h4>
   <p class="tarif">${data[i].price}</p>
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

  for (i=0 ; i < 1 ;i++){ 
    let itemsAc = []

    let itemAc1 = document.createElement('a')
    itemAc1.className=  "item-ac1"
    itemAc1.setAttribute('href', `produit.html?id=${data[0]._id}`)

    let imgAc1 = document.createElement('img')
    imgAc1.className = "class='vignette-g-ac1'"
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
    imgAc2.className = "class='vignette-g-ac1'"
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

    // let itemAc4 = document.createElement('a')
    // itemAc4.className=  "item-ac4"
    // itemAc4.setAttribute('href', `produit.html?id=${data[3]._id}`)

    // let itemAc5 = document.createElement('a')
    // itemAc5.className=  "item-ac5"
    // itemAc5.setAttribute('href', `produit.html?id=${data[4]._id}`)

    // let item6 = document.createElement('a')
    // item6.className=  "item-ac6"
    // item6.setAttribute('href', `produit.html?id=${data[5]._id}`)

    itemsAc.push(itemAc1,itemAc2,itemAc3)


    // item1.innerHTML = 
        
		// 			 	//  <img class="vignette-g-ac1" src=${data[0].imageUrl} alt="Hôtel de la mer" >
    //           ` 
		// 				 <div class="caption-ac">
		// 					 <h4 class="titre-ac">${data[0].name}</h4>
		// 				 </div>
		// 			 `
	
					// <a href="#" class="item-ac2">
					// 	<img class="vignette-g-ac2" src="${data[i].imageUrl}" alt="Hôtel de la mer" >
					// 	<div class="caption-ac">
					// 		<h4 class="titre-ac">Fort de Pomègues</h4>
					// 	</div>
					// </a>
	
					// <a href="#" class="item-ac3">
					// 	<img class="vignette-g-ac3" src="src=${data[i].imageUrl}" alt="Hôtel de la mer" >
					// 	<div class="caption-ac">
					// 		<h4 class="titre-ac">Îles du Frioul</h4>
					// 	</div>
					// </a>`
	
		// 			<a href="#" class="item-ac4">
		// 				<img class="vignette-g-ac4" src="./img\activites\3_medium\kilyan-sockalingum-NR8-cBCN3aI-unsplash.jpg" alt="Hôtel de la mer" >
		// 				<div class="caption-ac">
		// 					<h4 class="titre-ac">Parc National des Calanques</h4>
		// 				</div>
		// 			</a>
	
		// 			<a href="#" class="item-ac5">
		// 				<img class="vignette-g-ac5" src="./img\activites\3_medium\florian-wehde-xW9e8gdotxI-unsplash.jpg" alt="Hôtel de la mer" >
		// 				<div class="caption-ac">
		// 					<h4 class="titre-ac">Notre-Dame-de-la-Garde</h4>
		// 				</div>
		// 			</a>
	
		// 			<a href="#" class="item-ac6">
		// 				<img class="vignette-g-ac6" src="./img\activites\3_medium\lena-paulin-wH2-EJoDcV0-unsplash.jpg" alt="Hôtel de la mer" >
		// 				<div class="caption-ac">
		// 					<h4 class="titre-ac">Parc Longchamp</h4>
		// 				</div>
		// 			</a>
    
     
    //  <img class="vignette-g-a" src=${data[i].imageUrl} alt="Hôtel de la mer" >
    //  <div class="caption-a">
    //  <h4 class="hotel">${data[i].name}</h4>
    //  <p class="tarif">${data[i].price}</p>
    //    <div class="rating-a">
    //      <i class="fas fa-star" id="rating"></i>
    //      <i class="fas fa-star" id="rating"></i>
    //      <i class="fas fa-star" id="rating"></i>
    //      <i class="fas fa-star" id="rating"></i>
    //      <i class="fas fa-star" id="rating"></i>
    //    </div>
    //  </div>
  
            
      
   
    const itemAc = document.getElementById('activités')
    itemAc.append(itemAc1,itemAc2,itemAc3)
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