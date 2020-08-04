export const initialState = {
  characters: null,
  page: 1,
  theme: 'light'
}

export default function reducer(state, action) {
  switch(action.type){
    case 'SET_CHARACTERS':
      return { ...state, characters: action.payload}

    case 'SET_PAGE':
      return { ...state, page: action.payload}

    case 'INCREASE_PAGE':
      return {...state, page: state.page + 1}

      case 'DECREASE_PAGE':
        return {...state, page: state.page - 1}

      case 'TOGGLE_THEME':
        return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };

    default:
    return state;
  }
}
