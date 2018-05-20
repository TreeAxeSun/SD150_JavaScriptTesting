describe('reverseSequence', () => {
    it('returns number array that decrease the number from that number to 1 when a number is entered', () => {
        expect(reverseSeq(5)).toEqual([5,4,3,2,1]);
    });
    it('returns the number 1 when number 1 is entered.', () => {
        expect(reverseSeq(1)).toEqual([1]);
    });
    it('returns an empty array when the number 0 is entered.', () => {
        expect(reverseSeq(0)).toEqual([]);
    });
    it('returns an empty array when negative number is entered.', () => {
        expect(reverseSeq(-1)).toEqual([]);
    });
});