const furnitureContainer = document.querySelector('.funitureItems');
const url = 'https://fakestoreapi.com/products?limit=10'

fetch(url)
.then((resp) => resp.json())
.then((funitureDatas) => {
  console.log(funitureDatas)
  funitureDatas.map(funitureData => {
    // let img = document.createElement('img');
    // img.src = funitureData.image;
    // let span = document.createElement('span');
    let li = document.createElement('li')
    let span = `<img src=${funitureData.image} alt='' />
    <span>
      <h3>TITLE:</h3>${funitureData.title} 
      <h3>Category:</h3>${funitureData.category} 
      <h3>Price:</h3>${funitureData.price} 
      <h3>Rate</h3>${funitureData.rating.rate}
    </span>`;
    li.innerHTML = span;
    furnitureContainer.appendChild(li)
    // append(li, span);
    // append(div, li)
  })
}) 
.catch(function(error){
  console.log(error)
})