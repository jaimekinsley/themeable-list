import React, { useReducer, useEffect } from 'react';
import { AppContext } from '../hooks/appContext'
import reducer, { initialState } from '../reducers/appReducer';
import { fetchCharacters } from '../services/lastAirBenderAPI';

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    fetchCharacters()
    .then(characters => dispatch({
      type: 'SET_CHARACTERS',
      payload: characters
    }));
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider;
