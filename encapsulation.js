class SmartDevice {
  #madeIn = "CHINA";
  alternativeCountry = "UK";
  constructor(name, price, chargingPower) {
    this.name = name;
    this.price = price;
    this.chargingPower = chargingPower;
    this.#madeIn = "USA";
  }

  deviceChargingPower() {
    return `${this.name} needs ${
      this.chargingPower
    } volts charger.Its made in ${this.#madeIn} `;
  }
}

const iPhone10 = new SmartDevice("I-phone", 80000, 12);

console.log(iPhone10);
iPhone10.chargingPower = 13;
console.log(iPhone10.deviceChargingPower());
//console.log(iPhone10.#madeIn); //error because its private
console.log(iPhone10.alternativeCountry); // its exposed
