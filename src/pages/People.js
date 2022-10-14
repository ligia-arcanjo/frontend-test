import React, { useContext } from 'react';
import CardPeople from '../components/CardPeople';
import FilterInput from '../components/FilterInput';
import Header from '../components/Header';
import FilmsContext from '../context/FilmsContext';

import '../css/People.css';

function People() {
  const { peopleList, nameFilter } = useContext(FilmsContext);
  let people = [...peopleList];

  const renderPeople = () => {
    if (nameFilter) {
      people = people.filter(
        (person) => person.name.toLowerCase().includes(nameFilter.toLowerCase()),
      );
    }

    return people.map((person) => (
      <CardPeople
        key={person.id}
        name={person.name}
        age={person.age}
        gender={person.gender}
        hairColor={person.hair_color}
        eyeColor={person.eye_color}
      />
    ));
  };

  return (
    <>
      <Header />

      <FilterInput page="people" />

      <div className="container-people">
        { renderPeople() }
      </div>
    </>
  );
}

export default People;
