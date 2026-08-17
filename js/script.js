/* =========================================
   TURBOTOYS JAVASCRIPT
   ========================================= */


/* ---------- PRODUCT DATA ---------- */

const products = [

    {
        id: 1,
        name: "Speed Racer X",
        price: 14.99,
        category: "Racing",
        description: "A fast and colourful racing car."
    },

    {
        id: 2,
        name: "Turbo Red Racer",
        price: 17.99,
        category: "Racing",
        description: "A sporty red toy racing car."
    },

    {
        id: 3,
        name: "Monster Off-Roader",
        price: 21.99,
        category: "Off-Road",
        description: "A tough toy truck for adventures."
    },

    {
        id: 4,
        name: "Police Patrol Car",
        price: 16.99,
        category: "Emergency",
        description: "A police patrol car for rescue missions."
    },

    {
        id: 5,
        name: "Fire Rescue Truck",
        price: 19.99,
        category: "Emergency",
        description: "A bright fire engine for imaginative play."
    },

    {
        id: 6,
        name: "Construction Truck",
        price: 18.99,
        category: "Construction",
        description: "A construction vehicle for little builders."
    },

    {
        id: 7,
        name: "Blue Drift Car",
        price: 15.99,
        category: "Racing",
        description: "A cool blue car made for racing fun."
    },

    {
        id: 8,
        name: "Adventure Jeep",
        price: 22.99,
        category: "Off-Road",
        description: "An adventure jeep for off-road journeys."
    },

    {
        id: 9,
        name: "Rescue Ambulance",
        price: 17.49,
        category: "Emergency",
        description: "A rescue ambulance for emergency adventures."
    },

    {
        id: 10,
        name: "Mini Formula Car",
        price: 24.99,
        category: "Racing",
        description: "A Formula-style car for racing fans."
    },

    {
        id: 11,
        name: "Yellow Bulldozer",
        price: 20.49,
        category: "Construction",
        description: "A fun yellow bulldozer for construction play."
    },

    {
        id: 12,
        name: "Rock Crawler",
        price: 26.99,
        category: "Off-Road",
        description: "A powerful crawler for adventurous play."
    }

];


/* ---------- CART ---------- */

let cart = JSON.parse(
    localStorage.getItem("turboToysCart")
) || [];


/* ---------- SAVE CART ---------- */

function saveCart() {

    localStorage.setItem(
        "turboToysCart",
        JSON.stringify(cart)
    );

}


/* ---------- CART COUNT ---------- */

function updateCartCount() {

    const cartCount =
        document.getElementById("cart-count");

    if (!cartCount) {
        return;
    }

    const totalItems = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    cartCount.textContent = totalItems;

}


/* ---------- GET IMAGE FROM PRODUCTS.HTML ---------- */

function getProductImage(productId) {

    const button =
        document.querySelector(
            `.add-cart-btn[onclick="addToCart(${productId})"]`
        );

    if (!button) {
        return "";
    }

    const productCard =
        button.closest(".product-card");

    if (!productCard) {
        return "";
    }

    const image =
        productCard.querySelector(".product-image img");

    if (!image) {
        return "";
    }

    return image.getAttribute("src");

}


/* ---------- ADD TO CART ---------- */

function addToCart(productId) {

    const product = products.find(
        item => item.id === productId
    );

    if (!product) {
        return;
    }

    const image =
        getProductImage(productId);

    const existingItem = cart.find(
        item => item.id === productId
    );


    if (existingItem) {

        existingItem.quantity += 1;

        if (image) {
            existingItem.image = image;
        }

    } else {

        cart.push({

            id: product.id,

            name: product.name,

            price: product.price,

            category: product.category,

            image: image,

            quantity: 1

        });

    }


    saveCart();

    updateCartCount();

    showToast(
        `${product.name} added to cart!`
    );

}


/* ---------- REMOVE FROM CART ---------- */

function removeFromCart(productId) {

    cart = cart.filter(
        item => item.id !== productId
    );

    saveCart();

    updateCartCount();

    renderCart();

}


/* ---------- INCREASE QUANTITY ---------- */

function increaseQuantity(productId) {

    const item = cart.find(
        item => item.id === productId
    );

    if (!item) {
        return;
    }

    item.quantity += 1;

    saveCart();

    updateCartCount();

    renderCart();

}


/* ---------- DECREASE QUANTITY ---------- */

function decreaseQuantity(productId) {

    const item = cart.find(
        item => item.id === productId
    );

    if (!item) {
        return;
    }


    if (item.quantity > 1) {

        item.quantity -= 1;

        saveCart();

        updateCartCount();

        renderCart();

    } else {

        removeFromCart(productId);

    }

}


/* ---------- FILTER PRODUCTS ---------- */

function setupFilter() {

    const filter =
        document.getElementById(
            "category-filter"
        );

    if (!filter) {
        return;
    }

    const productCards =
        document.querySelectorAll(
            "#product-list .product-card"
        );

    filter.addEventListener(
        "change",
        function () {

            const selected =
                filter.value;

            let visibleProducts = 0;

            productCards.forEach(
                function (card) {

                    const category =
                        card.dataset.category;

                    if (
                        selected === "all" ||
                        category === selected
                    ) {

                        card.style.display = "";

                        visibleProducts++;

                    } else {

                        card.style.display = "none";

                    }

                }
            );


            const result =
                document.getElementById(
                    "product-result"
                );

            if (result) {

                result.textContent =
                    `${visibleProducts} products`;

            }

        }
    );

}


/* ---------- RENDER CART ---------- */

function renderCart() {

    const container =
        document.getElementById(
            "cart-container"
        );

    if (!container) {
        return;
    }


    if (cart.length === 0) {

        container.innerHTML = `

            <div class="empty-cart">

                <div class="empty-cart-icon">
                    🛒
                </div>

                <h2>Your cart is empty</h2>

                <p>
                    You haven't added any toy cars yet.
                </p>

                <br>

                <a
                    href="products.html"
                    class="btn btn-primary"
                >
                    Start Shopping
                </a>

            </div>

        `;

        return;

    }


    let subtotal = 0;


    let cartItemsHTML = `

        <div class="cart-layout">

            <div class="cart-items">

    `;


    cart.forEach(function (item) {

        const itemTotal =
            item.price * item.quantity;

        subtotal += itemTotal;


        cartItemsHTML += `

            <article class="cart-item">

                <div class="cart-item-image">

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                        onerror="this.style.display='none';"
                    >

                </div>


                <div class="cart-item-info">

                    <h3>
                        ${item.name}
                    </h3>

                    <p>
                        ${item.category}
                    </p>

                    <p>
                        £${item.price.toFixed(2)} each
                    </p>

                    <p>
                        Total:
                        £${itemTotal.toFixed(2)}
                    </p>


                    <div class="cart-controls">

                        <button
                            class="quantity-btn"
                            type="button"
                            onclick="decreaseQuantity(${item.id})"
                        >
                            −
                        </button>


                        <span class="quantity">
                            ${item.quantity}
                        </span>


                        <button
                            class="quantity-btn"
                            type="button"
                            onclick="increaseQuantity(${item.id})"
                        >
                            +
                        </button>


                        <button
                            class="remove-btn"
                            type="button"
                            onclick="removeFromCart(${item.id})"
                        >
                            Remove
                        </button>

                    </div>

                </div>

            </article>

        `;

    });


    cartItemsHTML += `

            </div>


            <aside class="cart-summary">

                <h2>Order Summary</h2>


                <div class="summary-row">

                    <span>Items</span>

                    <span>
                        ${getCartItemCount()}
                    </span>

                </div>


                <div class="summary-row">

                    <span>Subtotal</span>

                    <span>
                        £${subtotal.toFixed(2)}
                    </span>

                </div>


                <div class="summary-row">

                    <span>Delivery</span>

                    <span>
                        FREE
                    </span>

                </div>


                <div class="summary-total">

                    <span>Total</span>

                    <span>
                        £${subtotal.toFixed(2)}
                    </span>

                </div>


                <br>


                <button
                    type="button"
                    class="btn btn-primary"
                    style="width:100%;"
                    onclick="checkout()"
                >
                    Checkout
                </button>

            </aside>

        </div>

    `;


    container.innerHTML =
        cartItemsHTML;

}


/* ---------- CART ITEM COUNT ---------- */

function getCartItemCount() {

    return cart.reduce(
        (total, item) =>
            total + item.quantity,
        0
    );

}


/* ---------- CHECKOUT ---------- */

function checkout() {

    if (cart.length === 0) {

        showToast(
            "Your cart is empty."
        );

        return;

    }


    alert(
        "Thank you for shopping with TurboToys! " +
        "This is a front-end demonstration."
    );

}
/* ---------- FEATURED PRODUCTS ---------- */

function renderFeaturedProducts() {

    const container =
        document.getElementById("featured-products");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    /* Show ALL 12 products on the Home page */
    products.forEach(product => {

        container.innerHTML += createProductCard(product);

    });

}

/* ---------- TOAST ---------- */

function showToast(message) {

    const oldToast =
        document.querySelector(".toast");

    if (oldToast) {
        oldToast.remove();
    }


    const toast =
        document.createElement("div");

    toast.className = "toast";

    toast.textContent = message;

    document.body.appendChild(toast);


    setTimeout(
        function () {
            toast.remove();
        },
        2500
    );

}


/* ---------- CONTACT FORM ---------- */

function setupContactForm() {

    const form =
        document.getElementById(
            "contact-form"
        );

    if (!form) {
        return;
    }


    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            let valid = true;


            const name =
                document.getElementById("name");

            const email =
                document.getElementById("email");

            const subject =
                document.getElementById("subject");

            const message =
                document.getElementById("message");


            const nameError =
                document.getElementById(
                    "name-error"
                );

            const emailError =
                document.getElementById(
                    "email-error"
                );

            const subjectError =
                document.getElementById(
                    "subject-error"
                );

            const messageError =
                document.getElementById(
                    "message-error"
                );


            if (nameError) {
                nameError.textContent = "";
            }

            if (emailError) {
                emailError.textContent = "";
            }

            if (subjectError) {
                subjectError.textContent = "";
            }

            if (messageError) {
                messageError.textContent = "";
            }


            if (name.value.trim() === "") {

                nameError.textContent =
                    "Please enter your name.";

                valid = false;

            }


            if (
                email.value.trim() === "" ||
                !email.value.includes("@")
            ) {

                emailError.textContent =
                    "Please enter a valid email.";

                valid = false;

            }


            if (subject.value.trim() === "") {

                subjectError.textContent =
                    "Please enter a subject.";

                valid = false;

            }


            if (message.value.trim() === "") {

                messageError.textContent =
                    "Please enter your message.";

                valid = false;

            }


            if (valid) {

                const success =
                    document.getElementById(
                        "form-success"
                    );

                if (success) {

                    success.textContent =
                        "Thank you! Your message has been sent successfully.";

                }

                form.reset();

            }

        }
    );

}


/* ---------- PAGE INITIALISATION ---------- */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateCartCount();

        renderCart();

        setupFilter();

        setupContactForm();

    }
);
