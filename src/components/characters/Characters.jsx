import React from 'react';
import { useCharacters, useTheme } from '../../hooks/appContext';
import styles from './Characters.css';

const Characters = () => {
  const theme = useTheme();
  const characters = useCharacters();

  if(!characters) return <h2>Loading...</h2>
  const characterElements = characters.map(character => (
    <li key={character._id}>
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
