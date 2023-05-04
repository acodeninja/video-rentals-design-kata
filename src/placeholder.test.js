import { add } from "./placeholder";

describe('adding numbers', () => {
    test('one plus one is two', () => {
        expect(add(1, 1)).toEqual(2);
    });
});
