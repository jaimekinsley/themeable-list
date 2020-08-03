import reducer from './appReducer';

describe('app reducer', () => {
  it('sets a character with the SET_CHARACTERS action type', () => {
    const state = {
      characters: null
    };

    const action = {
      type: 'SET_CHARACTERS',
      payload: [
        {
        _id: "5cf5679a915ecad153ab68c8",
        allies: [
        "Royal Earthbender Guards"
        ],
        enemies: [
        "Chin"
        ],
        photoUrl: "https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441",
        name: "46th Earth King",
        affiliation: " Earth Kingdom Earth Kingdom Royal Family"
        }]
    };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      characters: [
        {
        _id: "5cf5679a915ecad153ab68c8",
        allies: [
        "Royal Earthbender Guards"
        ],
        enemies: [
        "Chin"
        ],
        photoUrl: "https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441",
        name: "46th Earth King",
        affiliation: " Earth Kingdom Earth Kingdom Royal Family"
        }]});
  });
});
