import React from 'react';
import { useCharacters, usePagination } from '../../hooks/appContext';
import Pagination from '../pagination/Pagination';

const Characters = () => {
  const characters = useCharacters();
  const page = usePagination();

  if(!characters) return <h2>Loading...</h2>
  const characterElements = characters.map(character => (
    <li>
      <h3>{character.name}</h3>
      <h5>{character.affiliation}</h5>
      <img src={character.photoUrl}/>
    </li>
  ))

  return(
    <>
    <ul>
      {characterElements}
    </ul>
    </>
  )
}

export default Characters;
