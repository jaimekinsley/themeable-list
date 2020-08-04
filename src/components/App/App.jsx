import React from 'react';
import Characters from '../characters/Characters';
import Pagination from '../pagination/Pagination';
import { usePagination } from '../../hooks/appContext';
import Header from '../header/Header';

export default function App() {
  const { page, nextPage, prevPage } = usePagination();
  return (
    <>
      <Header />
      <Pagination page={page} nextPage={nextPage} prevPage={prevPage} />
      <Characters />
    </>
  );
}
