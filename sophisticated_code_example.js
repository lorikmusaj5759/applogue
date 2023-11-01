/**
 * File: sophisticated_code_example.js
 * Description: This code demonstrates a sophisticated and elaborate JavaScript program that simulates a virtual online shopping store.
 * Author: Your Name
 * Date: November 1, 2022
 */

// Constants
const MAX_PRODUCTS = 1000;

// Classes
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getTotalPrice() {
    return this.price * this.quantity;
  }

  displayProductInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Price: $${this.price}`);
    console.log(`Quantity: ${this.quantity}`);
    console.log(`Total Price: $${this.getTotalPrice()}`);
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    if (this.products.length >= MAX_PRODUCTS) {
      console.log('Cannot add more products. Maximum limit reached.');
      return;
    }
    this.products.push(product);
    console.log(`${product.name} added to the shopping cart.`);
  }

  removeProduct(productName) {
    const index = this.products.findIndex((product) => product.name === productName);
    if (index !== -1) {
      this.products.splice(index, 1);
      console.log(`${productName} removed from the shopping cart.`);
    } else {
      console.log(`${productName} not found in the shopping cart.`);
    }
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.products.forEach((product) => {
      totalPrice += product.getTotalPrice();
    });
    return totalPrice;
  }

  displayShoppingCart() {
    console.log('Shopping Cart Contents:');
    this.products.forEach((product) => {
      product.displayProductInfo();
      console.log('------------------');
    });
    console.log(`Total Price: $${this.getTotalPrice()}`);
  }
}

// Usage
const shirt = new Product('Shirt', 29.99, 2);
const pants = new Product('Pants', 39.99, 1);
const shoes = new Product('Shoes', 79.99, 1);

const shoppingCart = new ShoppingCart();
shoppingCart.addProduct(shirt);
shoppingCart.addProduct(pants);
shoppingCart.addProduct(shoes);

shoppingCart.displayShoppingCart();

shoppingCart.removeProduct('Pants');

shoppingCart.displayShoppingCart();