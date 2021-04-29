let generate_btn = document.querySelector('.generate_btn')
let animal_type = document.querySelector('#Name')
let num_facts = document.querySelector('#num_facts')
let rad=document.getElementsByName('btnradio');
let rad2=document.getElementsByName('btnradio2');
const cardContainer = document.querySelector('#card-container')

generate_btn.addEventListener("click", function(){
    
    cardContainer.innerHTML=''
    let name_value = Name.value.toLowerCase()
    let DorA = 'dead'
    let gender = 'male'
    
  for (var i=0;i<rad.length; i++) {
    if (rad[i].checked) {
      DorA = rad[i].value
    }
  }
  for (var i=0;i<rad2.length; i++) {
    if (rad2[i].checked) {
      gender = rad2[i].value
    }
  }
fetch(`https://rickandmortyapi.com/api/character/?name=${name_value}&status=${DorA}&gender=${gender}`)
    .then(response => response.json())
    .then(data => makeCards(data.results))

    function makeCards(charactersArray){
        
        console.log(charactersArray)
        charactersArray.forEach(element => {
            cardContainer.innerHTML = cardContainer.innerHTML+
            `<div class="container ">
            <div class="row">
                <div class="col p-2">
                <h2 class="text-center">${element.name}</h2>
                </div>
                <div class="col w-100 p-2">
                <img class="border border-5 border-success"src=${element.image}></img>
                </div>
            </div>
        </div>
           `
            
        });
    }

})

//console.log(`https://rickandmortyapi.com/api/character/?name=${name_value}&status=${DorA}&1`)
 //  function fetchFacts(){
 //      fetch(`https://rickandmortyapi.com/api/character/?name=${name_value}&status=${DorA}&1`)
 //      .then(response => response.text())
 //      .then(data => {
 //          let temp = JSON.parse(data).text
 //          console.log(temp)
 //      })
 //      .catch(err => console.log(err))
 //  }

 //  fetchFacts()