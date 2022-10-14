import React, { useContext } from 'react';
import Header from '../components/Header';
import FilmsContext from '../context/FilmsContext';
import FilterInput from '../components/FilterInput';

function Locations() {
  const { locationList, nameFilter } = useContext(FilmsContext);
  let locations = [...locationList];

  const renderLocationTable = () => {
    if (nameFilter) {
      locations = locations.filter(
        (location) => location.name.toLowerCase().includes(nameFilter.toLowerCase()),
      );
    }

    return locations?.map((location) => (
      <tr key={location.id}>
        <td>{location.name}</td>
        <td>{location.climate}</td>
        <td>{location.terrain}</td>
        <td>{location.surface_water}</td>
      </tr>
    ));
  };

  return (
    <>
      <Header />
      <FilterInput />

      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>climate</th>
            <th>terrain</th>
            <th>surface_water</th>
          </tr>
        </thead>

        <tbody>
          {renderLocationTable()}
        </tbody>
      </table>
    </>
  );
}

export default Locations;
