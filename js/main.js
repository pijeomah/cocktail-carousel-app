
document.querySelector('button').addEventListener('click', rotateDrinks)

function rotateDrinks(){
    const drink = document.querySelector('input').value
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`
    
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data.drinks[1])
        data.drinks.forEach((el,index) => {
            setTimeout(function(){
                document.querySelector('h2').innerText = el.strDrink
                document.querySelector('img').src = el.strDrinkThumb
                document.querySelector('p').innerText = el.strInstructions
            },1000 * index)
        })
    })
    .catch(err => {
        console.log(`error  ${err}`)
    })


}