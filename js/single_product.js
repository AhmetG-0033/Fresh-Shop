
var container = document.querySelector('.container')


const params = new URLSearchParams(window.location.search)
const type = params.get('type')
const product_name = params.get('product')

document.title = "Fresh Shop-"+product_name;

console.log(product_name)


let fileToFetch = `json/${type}.json`

console.log(fileToFetch)

fetch(fileToFetch)
  .then(response => response.json())
  .then(data => {


    let product = data[product_name]

    let productsHTML = '';
       
        productsHTML += `
         
            <div class="product-image">
                <img src="${product.img}" alt="">
            </div>


            <div class="product-info">
                <h2 class="product-title"> ${product.title}</h2>
                <p class="product-description">
                   ${product.description}
                </p>
                <ul class="product-features">
                    <li>
                        <span style="font-weight: bold;">- Flavor Profile:</span> ${product.flavor}
                    </li>
                    <br>
                    <li>
                        <span style="font-weight: bold;">- Uses:</span> ${product.use}
                    </li>
                    <br>
                    <li>
                    ${product.benefits}
                    </li>
                </ul>

                <p class="product-price">
                    ${product.price}&#8378;/  ${product.unit}
                </p>

                <div class="process-buttons">
                    <button>
                        Add To The Cart
                    </button>
                    <button>
                        Buy Right Now
                    </button>
                </div>
            </div>
        `;
    
    container.innerHTML = productsHTML;
  });
