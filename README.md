
#  TurboToys – Toy Cars E-Commerce Website

##  Project Overview

TurboToys is a responsive front-end e-commerce website designed for selling toy cars and children's vehicles.

The website allows users to browse different toy cars, filter products by category, add products to a shopping cart, increase or decrease product quantities, remove products from the cart, and submit a contact form.

The project was developed using **HTML5, CSS3 and JavaScript** without using a back-end database or payment system.

---

##  Project Aim

The main aim of TurboToys is to create a simple, attractive and user-friendly online toy car shopping experience.

The website demonstrates:

- Multi-page website development
- Responsive web design
- Product presentation
- Product filtering
- Shopping cart functionality
- JavaScript DOM manipulation
- Local storage
- Form validation
- Interactive user interface
- Navigation between web pages

---

## Technologies Used

### HTML5
HTML5 was used to create the structure and content of the website.

### CSS3
CSS3 was used for:

- Website layout
- Colours and typography
- Product cards
- Buttons
- Navigation bar
- Responsive design
- Hover effects
- Animations
- Shopping cart layout
- Contact form styling

### JavaScript
JavaScript was used to provide interactive functionality including:

- Add to Cart
- Remove from Cart
- Increase quantity
- Decrease quantity
- Cart item count
- Product filtering
- Contact form validation
- Toast notifications
- Checkout demonstration
- Local storage

### Local Storage

The shopping cart is stored in the browser using `localStorage`.

This allows the cart information to remain available when the user moves between pages or refreshes the website.

---

##  Project Structure

The project is organised into separate HTML, CSS, JavaScript and image files.

text
TurboToys/
│
├── index.html
├── products.html
├── about.html
├── contact.html
├── cart.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── images/
    ├── speed racer.jpg
    ├── turbo red racer.jpg
    ├── monster.jpg
    ├── police patrol car.webp
    ├── Fire Rescue Truck.jpg
    ├── Construction Truck.jpg
    ├── drift car.jpg
    ├── Adventure Jeep.webp
    ├── Rescue Ambulance.jpg
    ├── Mini Formula Car.jpg
    ├── bulldozer.jpg
    └── Rock Crawler.jpg
````

---

#  Website Pages

##  Home Page – `index.html`

The Home page introduces the TurboToys brand and provides access to the main sections of the website.

It includes:

* TurboToys logo
* Navigation menu
* Hero section
* Welcome message
* Shop Now button
* Learn More button
* Product categories
* Featured toy cars
* Why Choose Us section
* Footer
* Shopping cart counter

The Home page also displays the product collection using JavaScript.

---

##  Products Page – `products.html`

The Products page displays the available toy cars.

There are **12 products** in the collection.

Product categories include:

* Racing
* Off-Road
* Emergency
* Construction

Each product contains:

* Product image
* Product category
* Product name
* Product description
* Product price
* Add to Cart button

### Product List

| No. | Product            | Category     |  Price |
| --- | ------------------ | ------------ | -----: |
| 1   | Speed Racer X      | Racing       | £14.99 |
| 2   | Turbo Red Racer    | Racing       | £17.99 |
| 3   | Monster Off-Roader | Off-Road     | £21.99 |
| 4   | Police Patrol Car  | Emergency    | £16.99 |
| 5   | Fire Rescue Truck  | Emergency    | £19.99 |
| 6   | Construction Truck | Construction | £18.99 |
| 7   | Blue Drift Car     | Racing       | £15.99 |
| 8   | Adventure Jeep     | Off-Road     | £22.99 |
| 9   | Rescue Ambulance   | Emergency    | £17.49 |
| 10  | Mini Formula Car   | Racing       | £24.99 |
| 11  | Yellow Bulldozer   | Construction | £20.49 |
| 12  | Rock Crawler       | Off-Road     | £26.99 |

### Product Filtering

Users can filter products using the category dropdown.

Available options are:

* All Products
* Racing
* Off-Road
* Emergency
* Construction

JavaScript dynamically hides and displays products according to the selected category.

---

#  Shopping Cart – `cart.html`

The Shopping Cart page allows users to manage the products they have selected.

Users can:

* View selected products
* Increase product quantity
* Decrease product quantity
* Remove products
* View item count
* View subtotal
* View delivery cost
* View total price
* Continue shopping
* Use the checkout demonstration button

The cart uses browser `localStorage` so products remain in the cart when navigating between pages.

### Cart Calculation

The JavaScript calculates:

```text
Subtotal = Product Price × Quantity
```

Delivery is displayed as:

```text
FREE
```

The total is calculated automatically from the selected products.

---

# ℹ️ About Page – `about.html`

The About page provides information about TurboToys and its purpose.

It includes:

* Company introduction
* Description of the toy car collection
* Company values
* Creativity
* Fun
* Quality

The page also contains a link to explore the products.

---

# 📧 Contact Page – `contact.html`

The Contact page allows visitors to submit an enquiry.

The form contains:

* Full Name
* Email Address
* Subject
* Message

JavaScript validates the form before submission.

Validation checks that:

* The name is not empty
* The email is entered and contains `@`
* The subject is not empty
* The message is not empty

If the form is completed correctly, a success message is displayed.

 Note: The contact form is a front-end demonstration and does not send information to a real server.

---

#  JavaScript Functionality

The main JavaScript functionality is contained in:

```text
js/script.js
```

## Product Data

The JavaScript contains an array of 12 products.

Each product includes:

```javascript
{
    id: 1,
    name: "Speed Racer X",
    price: 14.99,
    category: "Racing",
    description: "A fast and colourful racing car."
}
```

---

## Add to Cart

The `addToCart()` function adds a selected product to the shopping cart.

If the product already exists in the cart, its quantity is increased.

Example:

```javascript
addToCart(1);
```

---

## Remove from Cart

The `removeFromCart()` function removes a product completely from the shopping cart.

---

## Increase Quantity

The `increaseQuantity()` function increases the quantity of a selected product.

---

## Decrease Quantity

The `decreaseQuantity()` function decreases the quantity.

If the quantity reaches one and the user decreases it again, the product is removed from the cart.

---

## Cart Counter

The cart counter displays the total number of products currently in the shopping cart.

For example:

```text
🛒 Cart 3
```

The number updates automatically when products are added or removed.

---

## Local Storage

The project uses:

```javascript
localStorage
```

to save the shopping cart.

The cart is stored using:

```text
turboToysCart
```

This means that cart information can remain available after refreshing the page.

---

## Product Filtering

The `setupFilter()` function allows users to filter products based on category.

For example:

```text
Racing
```

will display only racing products.

---

## Toast Notification

When a product is added to the cart, a notification appears.

Example:

```text
Speed Racer X added to cart!
```

The notification disappears automatically after a short period.

---

## Contact Form Validation

The contact form uses JavaScript validation to check user input.

Error messages are displayed underneath the relevant fields when information is missing or invalid.

---

# 📱 Responsive Design

The website has been designed to work on different screen sizes.

Responsive CSS media queries are used for:

* Mobile phones
* Tablets
* Desktop computers

The website changes its layout depending on the screen width.

For example, the product grid changes from:

```text
1 column
```

on smaller screens to:

```text
2 columns
```

on tablets and:

```text
4 columns
```

on desktop screens.

---

#  Design Features

The website uses a modern toy-store design with:

* Dark navy background
* Orange primary colour
* White content cards
* Rounded corners
* Product cards
* Hover effects
* Responsive navigation
* Hero section
* Clear call-to-action buttons
* Product images
* Shopping cart interface

The main brand colour is defined in CSS as:

```css
--primary: #ff4d30;
```

---

#  Product Images

Product images are stored inside the:

```text
images/
```

folder.

The images are linked directly from the HTML.

Example:

```html
<img
    src="images/speed racer.jpg"
    alt="Speed Racer X"
>
```

The `alt` attribute provides alternative text describing the product image.

---

#  Website Navigation

The website contains a consistent navigation menu on each page.

```text
Home
Products
About
Contact
Cart
```

Users can move between pages using the navigation links.

---

#  Testing

The website can be tested by checking the following functionality:

### Navigation Testing

* Home link opens `index.html`
* Products link opens `products.html`
* About link opens `about.html`
* Contact link opens `contact.html`
* Cart link opens `cart.html`

### Product Testing

* Products display correctly
* Product images load correctly
* Prices are displayed correctly
* Add to Cart buttons work
* Product filtering works

# Shopping Cart Testing

* Products can be added
* Cart count updates
* Quantity can be increased
* Quantity can be decreased
* Products can be removed
* Subtotal updates
* Total updates
* Cart data is stored in local storage

# Contact Form Testing

* Empty fields show validation errors
* Invalid email addresses show an error
* Valid information displays a success message

# Responsive Testing

The website should be tested on:

* Desktop
* Tablet
* Mobile

---

#  Limitations

This project is a front-end e-commerce demonstration.

It does not currently include:

* Real user accounts
* Database
* Real payment processing
* Real order processing
* Server-side functionality
* Real email sending
* Stock management
* Customer login

The checkout button displays a demonstration message rather than processing a real payment.

---

#  Future Improvements

Future versions of TurboToys could include:

* User registration and login
* Real payment gateway
* Backend database
* Product search
* Product detail pages
* Product reviews and ratings
* Wishlist functionality
* Stock management
* Order history
* Real email/contact functionality
* Admin dashboard
* Secure checkout
* Delivery tracking

---

#  Author

Imran Abbas 

TurboToys was developed as a front-end web development project using:

* HTML5
* CSS3
* JavaScript

---

#  License

This project was created for educational purposes.

© 2026 TurboToys. All Rights Reserved.



