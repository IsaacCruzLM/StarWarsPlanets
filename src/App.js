import React from 'react';
import './App.css';

import FilterList from './Components/FilterList';
import PlanetTable from './Components/PlanetTable';
import SelectedFilters from './Components/SelectedFilters';
import Provider from './context/dataProvider';

import starWarsGif from './Assets/star-wars.gif';

function App() {
  return (
    <Provider>
      <main>
        <header>
          <div className="gif">
            <img src={ starWarsGif } alt="StarWarsGif" />
          </div>
          <FilterList />
        </header>
        <SelectedFilters />
        <PlanetTable />
      </main>
    </Provider>
  );
}

export default App;
