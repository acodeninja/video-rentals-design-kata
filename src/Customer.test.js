import { Customer, createCustomer } from "./Customer";

describe('creating a new customer', () => {
    const dob = new Date('2000-01-01T00:00:00');
    const phoneNumber = '07334675647';
    const existingCustomers = [];

    test('with the name Brian of Nasereth', () => {
        const customer = new Customer('Brian of Nasereth');

        expect(customer.name).toEqual('Brian of Nasereth');
    });
    test('with the date of birth of 2000-01-01', () => {
        const customer = new Customer('Brian of Nasereth', dob);

        expect(customer.dateOfBirth).toEqual(new Date('2000-01-01T00:00:00'));
    });
    test('with the phone number of 07334675647', () => {
        const customer = new Customer('Brian of Nasereth', dob, phoneNumber);

        expect(customer.phoneNumber).toEqual('07334675647');
    });
    test('persists the customer to the list of existing customers', () => {
        const customer = new Customer('Brian of Nasereth', dob, phoneNumber);
        createCustomer(existingCustomers, customer)
        expect(existingCustomers).toEqual(expect.arrayContaining([customer]));
    });
    describe('when the customer already exists', () => {
        const existingCustomers = [new Customer('Brian of Nasereth', dob, phoneNumber)];

        test('an error is raised', () => {
            const customer = new Customer('Brian of Nasereth', dob, phoneNumber);
            expect(() => createCustomer(existingCustomers, customer))
                .toThrow('Customer already exists')
        });
    });
});
