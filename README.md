# Paradise Nursery Shopping Application

Paradise Nursery is a responsive e-commerce houseplant shopping application built with **React**, **Redux Toolkit**, and **Vite** for the **IBM Developing Front-End Apps with React** final project.

## Features

- Landing page with the Paradise Nursery company name, a background image, an introduction, and a **Get Started** button.
- Product listing with **18 unique houseplants** grouped into **three categories**: Air Purifying, Low Maintenance, and Tropical Favorites.
- Each product has a thumbnail, name, price, and **Add to Cart** button.
- Add to Cart updates the Redux shopping cart, disables the corresponding button, and updates the cart quantity badge.
- Shared navbar on the product and cart pages with **Home**, **Plants**, and **Cart** links.
- Shopping cart shows individual unit prices, item subtotals, overall quantity, and overall price.
- Increase/decrease the quantity of any cart item, remove an item, continue shopping, or click **Checkout** to display a **Coming Soon** message.

## Technologies

React, React Redux, Redux Toolkit, CSS, Vite.

## Getting started

1. Install Node.js 18 or newer.
2. Open a terminal in this project folder.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL printed by Vite.

To create a production build, run `npm run build`.

## File guide for the final-project submission

- `README.md` - project description.
- `src/AboutUs.jsx` - information about Paradise Nursery.
- `src/App.css` - landing page background image and styling.
- `src/App.jsx` - landing page, navbar, and app navigation.
- `src/CartSlice.jsx` - Redux cart reducers and selectors.
- `src/ProductList.jsx` - categorized plant catalog and Add to Cart interactions.
- `src/CartItem.jsx` - shopping cart and quantity controls.

## Image note

Plant photographs are loaded from Unsplash image URLs and need an internet connection. The interface and shopping cart code run locally.
