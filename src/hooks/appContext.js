import React, { useContext } from 'react';

export const AppContext = React.createContext();

export const useCharacters = () => {
  const { state } = useContext(AppContext);
  return state.characters;
}

export const useDispatch = () => {
  const { dispatch } = useContext(AppContext);
  return dispatch;
}

export const usePagination = () => {
  const { state } = useContext(AppContext);
  const dispatch = useDispatch();
  const prevPage = () =>{
    dispatch({ type: 'DECREASE_PAGE'})
  }
  const nextPage = () =>{
    dispatch({ type: 'INCREASE_PAGE'})
  }
  return { page: state.page, nextPage, prevPage };
}
