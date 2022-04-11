'use strict';

describe('Airport', () => {
  let airport
  let plane
  beforeEach(() => {
    airport = new Airport();
    plane = jasmine.createSpy('plane', ['land']);
  });

  it('has not planes by default', () => {
    expect(airport.planes()).toEqual([]);
  });

  it('can clear planes for landing', () => {
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });

  it('can clear planes for take-off', () => {
    airport.clearForLanding(plane);
    airport.clearForTakeOff(plane);
    expect(airport.planes()).toEqual([]);
  });

  it('can check for stomy conditions', ()  => {
    expect(airport.isStormy()).toBeFalsy();
  });

  describe('Under stormy conditions', () => {
    it ('does not clear planes for take-off', () => {
      spyOn(airport, 'isStormy').and.returnValue(true);
      expect(() => { airport.clearForTakeOff(plane); }).toThrowError('cannot take off during storm');
    });
  });
});