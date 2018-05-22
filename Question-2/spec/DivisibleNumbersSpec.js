describe("isDivisible", function(){
    it("should return true, when the number is divisible by both of the provided divisors", function(){
        expect(isDivisible([8,2,4])).toBe(true);
    });
    it("should return false, when the number is smaller then both the provided divisors", function(){
        expect(isDivisible([16,32,48])).toBe(false);
    });
    it("should return false, when the number is not divisible by only one of the provided divisors", function(){
        expect(isDivisible([24,5,2])).toBe(false);
    });
    it("should return false, when the number is not divisible by any of the provided divisors", function(){
        expect(isDivisible([20,3,7])).toBe(false);
    });
});