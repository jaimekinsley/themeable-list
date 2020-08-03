export const fetchCharacters = (page = 1) => {
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?page=${page}`)
  .then(res => res.json())
}
