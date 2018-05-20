describe('reverseString', () => {
    it('returns itself when there is only 1 characters in the string', () => {
        expect(solution('a')).toBe('a');
    });
    it('returns the string, reversed when there are multiple characters in the string', () => {
        expect(solution('abcde')).toBe('edcba');
    });
    it('returns empty string when there are no characters in the string', () => {
        expect(solution('')).toBe('');
    });
});