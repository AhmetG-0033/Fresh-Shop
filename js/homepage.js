var container = document.querySelector(".featured-products");
var container2 = document.querySelector(".offered-products");


/* FETCHING THE FEATURED PRODUCTS */

fetch('json/featured_products.json')
  .then(response => response.json())
  .then(data => {

    let productsHTML = '';
    
    for (let product in data) {
       
        productsHTML += `
         <a href= ${data[product].product_link}>
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

/* ---- */



/* FETCHING THE OFFERED PRODUCTS */


fetch('json/offered_products.json')
  .then(response => response.json())
  .then(data => {

    let productsHTML = '';
    
    for (let product in data) {
       
        productsHTML += `
        <a href= ${data[product].product_link}>
        <div class="card offer">
            <img src="${data[product].img}" class="card-img" alt="">
    
            <div class="card-info">
                <h3>
                    ${data[product].title}
                </h3>
    
                <p>
                    <span class="old-price">${data[product].price}&#8378;</span> ${data[product].offered_price}&#8378; per ${data[product].unit}
                </p>
            </div>
        </div>
        </a>
    `;
    
      }
    container2.innerHTML = productsHTML;
  });

