    
    // ****************** compteur panier *******************************
    
    // fetch ('http://localhost:3000/api/teddies')
    //   .then((res) => res.json())
    //   .then((data) => {
      
    let OP = JSON.parse(localStorage.getItem('cartId'))
    localStorage.setItem('cartId', JSON.stringify(OP));                            
    // console.log(OP)
    // let init = []
    // let dataStr = JSON.stringify(data)
    // data = JSON.parse(dataStr)
    if(OP.length>0){ 
    let productNumbers = OP.length
    document.querySelector('.cart span').textContent = productNumbers
    }
      // })
  
