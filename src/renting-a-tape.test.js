import { Customer } from "./Customer";
import { Rental } from "./Rental";
import { Tape } from "./Tape";

describe('renting a tape', () => {
    const tape = new Tape();
    const customer = new Customer();

    test('renting a tape creates an instance of rental', () => {
        expect(tape.rent(customer)).toBeInstanceOf(Rental)
    });

    describe('the rental', () => {
        const rental = tape.rent(customer)

        test('customer attached', () => {
            expect(rental.customer).toBeInstanceOf(Customer);
        });

        test('rental start date is today', () => {
            expect(rental.startDate).toEqual(new Date(2020, 3, 1, 2, 30, 10, 30));
        });
    });
});
