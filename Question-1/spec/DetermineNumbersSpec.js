describe("positiveSum", function () {
    it("should return the sum of all the numbers, when the numbers are all positive", function () {
      expect( positiveSum([1,2,3])).toEqual(6);
    });
    it(" it should not be included as part of the sum, when there is a negative number in the provided array", function(){
      expect( positiveSum([1,2,3,-5])).toEqual(6);
    });
    it("it should return a sum of 0, when the provided array is empty", function(){
      expect( positiveSum([])).toEqual(0);
    });
    it(" it should return a sum of 0, when the provided array is all negative numbers ", function(){
      expect( positiveSum([-1,-2,-3])).toEqual(0);
    });
});