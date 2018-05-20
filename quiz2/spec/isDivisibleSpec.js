describe('isDivisible', () => {
    it('should retun true when a number is divisible by both of the provided divisors', () => {
        expect(isDivisible(8,4,2)).toBe(true);
    });
    it('should return false when the number is smaller then both the provided divisors', () => {
        expect(isDivisible(2,4,6)).toBe(false);
    });
    it('should return false when the number is not divisible by only one of the provided divisors', () => {
        expect(isDivisible(10,2,3)).toBe(false);
    });
    it('should return false when the number is not divisible by any of the provided divisors', () => {
        expect(isDivisible(7,2,3)).toBe(false);
    })
});