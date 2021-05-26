class Mobile {
  constructor(brandName, price, model) {
    this.brandName = brandName;
    this.price = price;
    this.model = model;
  }

  overview() {
    return `This is a new ${this.model} model from ${this.brandName} and the price is ${this.price} `;
  }
}

const samsungS8 = new Mobile("Samsung", 60000, "S8");

console.log(samsungS8);
console.log(samsungS8.overview());
