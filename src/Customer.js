class Customer {
    constructor(name, dateOfBirth, phoneNumber) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.phoneNumber = phoneNumber;
    }
}

const createCustomer = (existingCustomers, customer) => {
    existingCustomers.push(customer);
};

export {Customer, createCustomer};
