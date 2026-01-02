import { ALL_PERSONS } from '../queries'

export const addPersonToCache = (cache, personToAdd) => {
  cache.updateQuery({ query: ALL_PERSONS }, ({ allPersons }) => {
    const personExists = allPersons.some(
      (person) => person.id === personToAdd.id,
    )

    if (personExists) {
      return { allPersons }
    }

    return {
      allPersons: allPersons.concat(personToAdd),
    }
  })
}
