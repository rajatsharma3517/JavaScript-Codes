class Car {
    constructor(brand, model, year, price) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.price = price;
    }

    displayDetails() {
        console.log("Car Details");
        console.log("-----------------------");
        console.log(`Brand : ${this.brand}`);
        console.log(`Model : ${this.model}`);
        console.log(`Year  : ${this.year}`);
        console.log(`Price : ₹${this.price.toLocaleString()}`);
        console.log();
    }
}

const car1 = new Car("Toyota", "Fortuner", 2024, 4500000);
const car2 = new Car("Hyundai", "Creta", 2023, 1800000);
const car3 = new Car("Mahindra", "Scorpio N", 2025, 2200000);

car1.displayDetails();
car2.displayDetails();
car3.displayDetails();