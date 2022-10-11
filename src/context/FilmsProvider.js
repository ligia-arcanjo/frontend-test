import React from 'react';
import PropTypes from 'prop-types';
import FilmsContext from './FilmsContext';

function FilmsProvider({ children }) {
  return (
    <FilmsContext.Provider value={}>
        {children}
    </FilmsContext.Provider>
  );
}

FilmsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FilmsProvider;
