//***********************************   formulaire ************************************************
// déclaration du formulaire à envoyer au serveur via POST 
var ids = JSON.parse(localStorage.getItem('ids'))

function product(_id) {
this._id = _id
// console.log(_id)
}

const validationCommande = {
  contact: {
    "firstName":"" ,
    "lastName":"",
    "address":"",
    "city":"",
    "email":""
}, 
products: [{
    "_id" : ids[0],
}]
}

for( j=1; j<ids.length; j++){
// console.log(ids.length)
validationCommande.products.push(new product(ids[j]))
}
// initiation du localStorage formulaire POST
let initForm = []
localStorage.setItem('formulaire', JSON.stringify(initForm)) 
console.log('création formulaire')
// formulaire inputs, erreurs et contraintes de saisie
const myForm = document.getElementById('myForm')
const checkout = document.getElementById('checkout')

myForm.addEventListener('submit', async function(e) { 
// console.log(myForm)
e.preventDefault()
let myRegexMail = /^[a-zA-Z-\s\-\_\é\è\à\ç\'\@\0-9\.]+$/ 
let myRegexNamesCityLetters = /^[A-Z][a-zA-Z-\s\-\é\è\à\ç\']+$/ 
let myRegexAddress = /^[a-zA-Z-\s\-\é\è\à\ç\'\0-9\.]+$/ 

const firstName = document.getElementById('fname')
if(firstName.value.trim()==""){
  let firstNameError = document.getElementById('firstNameError')
  firstNameError.innerHTML ="Le champ prénom est requis"
  firstNameError.style.color ='red'
  e.preventDefault()
}else if(myRegexNamesCityLetters.test(firstName.value) == false){
  let firstNameError = document.getElementById('firstNameError')
  firstNameError.innerHTML = "prénom non valide"
  firstNameError.style.color ='red'
  e.preventDefault()
  firstName.addEventListener('input', updatevalue)
  function updatevalue (){
  firstNameError.innerHTML = ""
  }
}else{
  prenom = firstName.value
}

const lastName = document.getElementById('lname')
if(lastName.value.trim()==""){
  let lastNameError = document.getElementById('lastNameError')
  lastNameError.innerHTML ="Le champ nom est requis"
  lastNameError.style.color ='red'
  e.preventDefault()
}else if(myRegexNamesCityLetters.test(lastName.value) == false){
  let lastNameError = document.getElementById('lastNameError')
  lastNameError.innerHTML = "nom non valide"
  lastNameError.style.color ='red'
  e.preventDefault()
  lastName.addEventListener('input', updatevalue)
  function updatevalue (){
  lastNameError.innerHTML = ""
  }
}else{
  nom = lastName.value
}

const address = document.getElementById('address')
if(address.value.trim()==""){
  let addressError = document.getElementById('addressError')
  addressError.innerHTML ="Le champ adresse est requis"
  addressError.style.color ='red'
  e.preventDefault()
}else if(myRegexAddress.test(address.value) == false){
  let addressError = document.getElementById('addressError')
  addressError.innerHTML = "adresse non valide"
  addressError.style.color ='red'
  e.preventDefault()
  address.addEventListener('input', updatevalue)
  function updatevalue (){
  addressError.innerHTML = ""
  }
}else{
  adresse = address.value
}

const city = document.getElementById('city')
if(city.value.trim()==""){
  let cityError = document.getElementById('cityError')
  cityError.innerHTML ="Le champ ville est requis"
  cityError.style.color ='red'
  e.preventDefault()
}else if(myRegexNamesCityLetters.test(city.value) == false){
  let cityError = document.getElementById('cityError')
  cityError.innerHTML = "ville non valide"
  cityError.style.color ='red'
  e.preventDefault()
  city.addEventListener('input', updatevalue)
  function updatevalue (){
  cityError.innerHTML = ""
  }
}else{
  ville = city.value
}

const email = document.getElementById('email')
if(email.value.trim()==""){
  let emailError = document.getElementById('emailError')
  emailError.innerHTML ="Le champ email est requis"
  emailError.style.color ='red'
  e.preventDefault()
}else if(myRegexMail.test(email.value) == false){
  let emailError = document.getElementById('emailError')
  emailError.innerHTML = "email non valide"
  emailError.style.color ='red'
  e.preventDefault()
  email.addEventListener('input', updatevalue)
  function updatevalue (){
  emailError.innerHTML = ""
  }
}
else{
  mail = email.value
}{
// sauvegarde dans le localStorage des données du formulaire 
  validationCommande.contact.firstName = prenom
  validationCommande.contact.lastName = nom
  validationCommande.contact.address = adresse
  validationCommande.contact.city = ville
  validationCommande.contact.email = mail

  var formulaire  = JSON.parse(localStorage.getItem('formulaire'))
  localStorage.setItem('formulaire', JSON.stringify(validationCommande))
    if(formulaire != null){ 
    var formulaire  = JSON.parse(localStorage.getItem('formulaire'))
    formulaireStr = JSON.stringify(formulaire)
    formulaireFetch()
    }
  }
})
// envoi du formulaire dans l'aattende d'un réponse renvoyant le idOrder de confirmation
var formulaire  = JSON.parse(localStorage.getItem('formulaire'))
formulaireStr = JSON.stringify(formulaire)
// console.log(validationCommande.contact.email)
  
// ***************************************************************************

function formulaireFetch() {
  fetch('http://localhost:3000/api/teddies/order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : 'Access-Control-Allow-Methods'
    },
    body:formulaireStr
    }
  )
  .then(function(response){
    if(response.ok){
      return response.json()
     
  }else{
    localStorage.removeItem('formulaire');
    console.log('Mauvaise réponse du réseau');

  }
  })
  .catch(function(error) {
    console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
  })
  // sauvegarde des données dans localStorage si réponse renvoyée du serveur
  .then(function(data){
  if(data){ 
    
    console.log('post request',data)
    let dataStr = JSON.stringify(data)
    function saveIdOrderInformation() { 
      let initIdOrderInformation = []
      localStorage.setItem('orderIdInformation',JSON.stringify(initIdOrderInformation))
      let orderIdInformation = JSON.parse(localStorage.getItem('orderIdInformation'))
      orderIdInformation.push(dataStr)
      localStorage.setItem('orderIdInformation',  JSON.stringify(orderIdInformation))
      if(orderIdInformation != "{}"){ 
      // console.log(orderIdInformation[0])
      location.href='confirmation.html'
      }
    }
    saveIdOrderInformation()
  }
  })
}
