class Customer2 {
    firstName: string;
    lastName: string;

    public greeter() {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}

let customer = new Customer2();
customer.firstName = "John";
customer.lastName = "Smith";
customer.greeter();