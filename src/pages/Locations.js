import React, { useContext } from 'react';
import Header from '../components/Header';
import FilmsContext from '../context/FilmsContext';
import FilterInput from '../components/FilterInput';

import '../css/Locations.css';

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
      <div className="container-location">
        <table className="location-table">
          <thead>
            <tr>
              <th>NAME</th>
              <th>CLIMATE</th>
              <th>TERRAIN</th>
              <th>SURFACE WATER</th>
            </tr>
          </thead>

          <tbody>
            {renderLocationTable()}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Locations;
