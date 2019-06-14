import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-order1',
	templateUrl: './order1.page.html',
	styleUrls: ['./order1.page.scss'],
})

export class Order1Page implements OnInit {

	private prices: Object = {
		beefSamosa: 8.99,
		chickenSamosa: 8.99,
		vegetarianSamosa: 8.99, 
		spinachCheeseSamosa: 8.99,
		porkEggRoll: 8.99, 
		vegetarianEggRoll: 8.99 
	};
	
	private cart: any = [
	
	]
	
	private cartItemCounter: int = 0;

	constructor() { 
		
	}
	
	ngOnInit() {
	}
	
	addToCart(item) {
		
		let index = this.alreadyInCart(item);
		console.log("Cart Item Counter: " + this.cartItemCounter);
		console.log("Index: " + index);
		
		switch(item) {
			
			case "Beef Samosa": {
				console.log("Index Before Run: " + index);
				if(index === -1) {
					this.cart[this.cartItemCounter] = {
						name: "Beef Samosa", 
						quantity: 1, 
						price: 8.99
					}
					
					this.cartItemCounter++;
					console.log(this.cartItemCounter);
					
				} else if(!index) {
					this.cart[0].quantity++;
				} else {
					this.cart[index].quantity++;
				}
				break;
			}
				
		}
		
		console.log(this.cart);
	}
	
	alreadyInCart(item) {
		
		let indexCheck = 0;
		
		/* YOU NEED TO FIGURE OUT WHY VALUE DOESN'T EQUAL THIS.CART */
		for(var value in this.cart) {
			console.log(value);
			console.log("Value.name: " + value.name);
			console.log("Item: " + item);
			console.log("Value: " + value.name);
			if(item === value.name) {
				console.log("Test Index: " + indexCheck);
				return indexCheck;
				
			}
			indexCheck++;	
		};
		console.log("Test123124");
		return -1;
	}
}
