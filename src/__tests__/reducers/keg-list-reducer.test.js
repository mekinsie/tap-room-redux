import kegListReducer from '../../reducers/keg-list-reducer'

describe('kegListRecuer', () => {
  test('Should return default state if no action type is recognized', () => {
    expect(kegListReducer({}, {type: null})).toEqual({});
  });
});