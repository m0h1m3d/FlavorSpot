function loadMenu(){
  const content = document.querySelector('.content');
  const menu = document.createElement('div');
  menu.innerHTML = `
  <div class="menu">
            <h1 class="menu-heading">Food <span class="orange">Menu</span></h1>
            <div class="food">
                <div class="order">
                    <img src="./Assets/imgs/grilled-spicy-chicken-wings-with-ketchup-and-french-fries-ai-generative-free-png.webp" alt="">
                    <div class="order-info">
                        <h2>Breakfast Meal</h2>
                        <button class="order-info-btn">Add to cart</button>
                    </div>
                    <div class="order-price">
                      200$
                    </div>
                </div>
                <div class="order">
                    <img src="./Assets/imgs/about.webp" alt="">
                    <div class="order-info">
                        <h2>Lunch Meal</h2>
                        <button class="order-info-btn">Add to cart</button>
                    </div>
                    <div class="order-price">
                        200$
                    </div>
                </div>
                <div class="order">
                    <img src="./Assets/imgs/about.webp" alt="">
                    <div class="order-info">
                        <h2>Dinner Meal</h2>
                        <button class="order-info-btn">Add to cart</button>
                    </div>
                    <div class="order-price">
                        200$
                    </div>
                </div>
            </div>
        </div>`;

    content.insertAdjacentHTML('afterbegin',menu.innerHTML);
}

export default loadMenu