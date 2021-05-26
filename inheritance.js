class SmartDevice {
  constructor(name, price, chargingPower) {
    this.name = name;
    this.price = price;
    this.chargingPower = chargingPower;
  }

  deviceChargingPower() {
    return `${this.name} needs ${this.chargingPower} volts charger. `;
  }
}

class Mobile extends SmartDevice {
  constructor(name, price, model, chargingPower) {
    super(name, price, chargingPower);
    this.model = model;
  }
}

const samsungS8 = new Mobile("samsung", 60000, "S8", "8");
console.log(samsungS8);
console.log(samsungS8.deviceChargingPower());
