import React from 'react';
import Films from './pages/Films';
import FilmsProvider from './context/FilmsProvider';

function App() {
  return (
    <FilmsProvider>
      <Films />
    </FilmsProvider>
  );
}

export default App;
