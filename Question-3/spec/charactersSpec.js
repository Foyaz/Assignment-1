describe("characters", function(){
    it("should return itself, when there is only 1 character in the string", function(){
    expect(solution(['a'])).toEqual(['a']);
    });
    it("should return the string reversed, when there are multiple characters in the string", function(){
    expect(solution(['a,b,c'])).toBe(['c,b,a']);
    });
    it("should return empty string, when there are no characters in the string", function(){
    expect(solution([''])).toBe(['']);
    });
});