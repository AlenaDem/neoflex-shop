const ROOT_PRODUCTS_HEADPHONES = document.getElementById('products-headphones');
const ROOT_PRODUCTS_WIRELESS = document.getElementById('products-wireless');
class Products {
    render() {
        let catalogHeadphones = '';
    
        headphones.forEach(({id, img, title, price, rate}) => {
            catalogHeadphones += `
            <div class="product-container">
                <div class="product-pic-container">
                    <img src="${img}" alt="Picture" class="product-pic">
                </div>
                <div class="product-info">

                    <div class="product-info-col-name">
                        <span class="product-name">${title}</span>
                        <div class="product-rate">
                            <div class="star-img"></div>
                            <span>${rate}</span>
                        </div>
                        
                    </div>
                    <div class="product-info-col-buy">
                        <span class="product-price">${price} ₽</span>
                        <span class="product-buy">Купить</span>
                    </div>
                </div>
            </div>            
            `;
        });
        ROOT_PRODUCTS_HEADPHONES.innerHTML = catalogHeadphones;

        let catalogWireless = '';
        wireless.forEach(({id, img, title, price, rate}) => {
            catalogWireless += `
            <div class="product-container">
                <div class="product-pic-container">
                    <img src="${img}" alt="Picture" class="product-pic">
                </div>
                <div class="product-info">

                    <div class="product-info-col-name">
                        <span class="product-name">${title}</span>
                        <div class="product-rate">
                            <div class="star-img"></div>
                            <span>${rate}</span>
                        </div>
                        
                    </div>
                    <div class="product-info-col-buy">
                        <span class="product-price">${price} ₽</span>
                        <span class="product-buy">Купить</span>
                    </div>
                </div>
            </div>            
            `;
        });
        ROOT_PRODUCTS_WIRELESS.innerHTML = catalogWireless;
    }
}

const productsPage = new Products();
productsPage.render();