'use strict';

describe('Weather', function(){
  var weather;

  beforeEach(function(){
    weather = new Weather();
  });

  it('warns when weather is stormy', function(){
    spyOn(Math, 'random').and.returnValue(1);
    expect(weather.isStormy()).toBeTruthy();
  });

  it('reports when weather is not stormy', function(){
    spyOn(Math, 'random').and.returnValue(0);
    expect(weather.isStormy()).toBeFalsy();
  });
});
