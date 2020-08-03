import React, { useReducer } from 'react';
import { AppContext } from '../hooks/appContext'
import reducer, { initialState } from '../reducers/app.Reducer';

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider;
