import { useMemo } from 'react';

const FilteredList = ({ people }) => {
  // Memorizzo la lista filtrata per evitare rifiltraggi non necessari
  const filteredPeople = useMemo(() => {
    console.log('Filtering list...');
    return people.filter(person => person.age > 18);
  }, [people]);

  return (
    <ul>
      {filteredPeople.map(person => (
        <li key={person.id}>
          {person.name} - {person.age} years old
        </li>
      ))}
    </ul>
  );
};

export default FilteredList;