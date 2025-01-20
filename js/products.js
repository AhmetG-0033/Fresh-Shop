
var container = document.querySelector('.container')

const params = new URLSearchParams(window.location.search);
const category = params.get('category'); 

document.title = "Fresh Shop-"+category;

let fileToFetch = `json/${category}.json`

console.log(fileToFetch)

fetch(fileToFetch)
  .then(response => response.json())
  .then(data => {

    let productsHTML = '';
    
    for (let product in data) {
       
        productsHTML += `
         <a href=${data[product].product_link}>
          <div class="card">    
            <img src="${data[product].img}" class="card-img" alt="${data[product].title}">
            <div class="card-info">
              <h3>
                <code>${data[product].title}</code>
              </h3>
              <p>
                <code>
                  ${data[product].price}&#8378; per ${data[product].unit}
                </code>
              </p>
            </div>
          </div>
          </a>
        `;
      }
    container.innerHTML = productsHTML;
  });
