describe("FizzBuzz", function() {

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });


  describe('knows when a number is', function(){

    it("divisible by 3", function() {
      expect(fizzBuzz.isDivisibleByThree(6)).toBe('Fizz');
    });
  });

  // describe('knows when a number is NOT', function() {
  //
  //   it()
  // });
});
