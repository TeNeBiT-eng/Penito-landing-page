const furnitureContainer = document.querySelector(".funitureItems");
const url = "https://fakestoreapi.com/products?limit=10";

fetch(url)
  .then((resp) => resp.json())
  .then((funitureDatas) => {
    console.log(funitureDatas);
    funitureDatas.map((funitureData) => {
      let li = document.createElement("div");
      let span = `<img src=${funitureData.image} alt=''/>
    <span>
      <h3>TITLE:</h3><p>${funitureData.title}</p>
      <h3>Category:</h3>${funitureData.category} 
      <h3>Price:</h3>${funitureData.price} 
      <h3>Rate</h3>${funitureData.rating.rate}
    </span>`;
      li.innerHTML = span;
      furnitureContainer.appendChild(li);
    });
  })
  .catch(function (error) {
    console.log(error);
  });
