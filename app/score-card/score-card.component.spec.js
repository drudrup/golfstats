describe('ScoreCardController', function() {

  it('should create an empty Golf Score Card', function() {
    var scope = {};
    var ctrl = new ScoreCardController(scope);

    expect(scope.holes.length).toBe(8);
  });

});
