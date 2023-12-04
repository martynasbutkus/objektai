function Car(brand, model, mile, price, image){
    this.brand = brand
    this.model = model
    this.mile = mile
    this.price = price
    this.image = image
}
  
function addCar(){
    const brand = document.getElementById('brand').value
    const model = document.getElementById('model').value
    const mile = document.getElementById('mile').value
    const price = document.getElementById('price').value
    const image = document.getElementById('image').value
    const car = new Car(brand, model, mile, price, image)
    display(car)
}
  
function display(car){
    const list = document.getElementById('list')
  
    const carDiv = document.createElement('div')
    carDiv.className = 'car'
    carDiv.innerHTML = `
    <img src="${car.image}">
    <p>${car.brand} ${car.model}</p>
    <p>Miliu: ${car.mile} miles</p>
    <p>Kaina: ${car.price}</p>
    `
  
    carDiv.addEventListener('click', function () {
        alert(`Kaina: ${car.price}`)
    })
    list.appendChild(carDiv)
}