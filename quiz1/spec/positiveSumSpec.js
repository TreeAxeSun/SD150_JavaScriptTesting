describe('positiveSum', () => {
    it('should return the sum of all numbers when the numbers are all positive', () => {
        expect(positiveSum([1, 2, 3, 4, 5])).toEqual(15);
    });
    it('should not be included as part of the sum when there is a negative number in the provided array', () => {
        expect(positiveSum([1, -2, 3, 4, 5])).toEqual(13);
    });
    it('should return a sum of 0 when the provided array is empty', () => {
        expect(positiveSum([])).toEqual(0);
    });
    it('should return a sum of 0 when the provided array is all negative numbers', () => {
        expect(positiveSum([-1, -2, -3, -4, -5])).toEqual(0);
    })
});