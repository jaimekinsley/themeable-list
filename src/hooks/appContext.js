import React, { useContext } from 'react';

export const AppContext = React.createContext();

export const useCharacters = () => {
  const { state } = useContext(AppContext);
  return state.characters;
};

// export const useState = () => {
//   const { state } = useContext(AppContext);
//   return state;
// };

export const useDispatch = () => {
  const { dispatch } = useContext(AppContext);
  return dispatch;
};

export const usePagination = () => {
  const dispatch = useDispatch();
  const { state } = useContext(AppContext);
  
  const prevPage = () => {
    dispatch({ type: 'DECREASE_PAGE' });
  };
  const nextPage = () => {
    dispatch({ type: 'INCREASE_PAGE' });
  };
  return { page: state.page, nextPage, prevPage };
};

export const useTheme = () => {
  const { state } = useContext(AppContext);
  return state.theme;
};
