import { Rental } from "./Rental";

export class Tape {
    rent(customer) {
        const rental = new Rental();
        rental.customer = customer;

        return rental;
    }
}
