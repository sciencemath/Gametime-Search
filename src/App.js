import { useState } from 'react';

import { searchResults } from './api/search';
import EventResults from './components/SearchResults/EventResults';
import { GameTimeLogo } from './assets/Logo';
import { SearchIcon } from './assets/SearchIcon';
import './index';
import './app.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setEventData] = useState({});

  /**
   * @TODO
   * Simply returns the results needs some deferment
   * could cache values manually or use 3rd party library
   * with retry handling built in.
   *
   * When user is not typing should fetch top searches in background.
   */
  const fetchSearchResults = async (e) => {
    setSearchTerm(e.target.value);
    const searchData = await searchResults(searchTerm);
    setEventData(searchData);
  };

  return (
    <div className="gametime-search">
      <GameTimeLogo />
      <div className="search-app-container">
        <input
          className="search-input"
          type="text"
          name="search"
          id="search"
          aria-label="search"
          value={searchTerm}
          onChange={fetchSearchResults}
          data-testid="search-input"
        />
        <div className="search-icon">
          <SearchIcon />
        </div>
        {/* Should something if no results found */}
        {Boolean(Object.keys(data).length) && <EventResults data={data} />}
      </div>
    </div>
  );
}

export default App;
