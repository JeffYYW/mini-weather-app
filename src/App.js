import React, { useEffect, useState } from 'react';
import { asyncGetCurrentPosition, getLocationId, getLocationData, getLocationsByName } from './utils/utils';

import Theme from './Theme';
import SearchForm from './components/SearchForm';
import DayCard from './components/DayCard';
import SearchModal from './components/SearchModal';
import LocationsList from './components/LocationsList';

const App = () => {
  const [locationData, setLocationData] = useState(null);

  // async functions return a promise
  const getCurrentLocationData = async () => {
    try {
      const { coords: { latitude, longitude } } = await asyncGetCurrentPosition();

      let locationId = await getLocationId(latitude, longitude);
      let results = await getLocationData(locationId);

      setLocationData(results);
      
    } catch (error) {
      console.log(error.message);
    }
  }

  const [locationInput, setLocationInput] = useState('');
  const [locationsList, setLocationsList] = useState(null);

  const handleLocationSubmit = async (e) => {
    e.preventDefault();
    let list = await getLocationsByName(locationInput);
    setLocationsList(list);
  }

  const handleLocationChange = (e) => {
    setLocationInput(e.target.value);
  }

  const renderLocationsList = () => {
    if (locationsList) {
      return (
        <LocationsList
          locationsList={locationsList}
          setLocationData={setLocationData}
          setSearchModalShown={setSearchModalShown}
        />
      )
    } else {
      return null
    }
  }

  const renderCurrentLocation = () => {
    if (locationData) {
      const { consolidated_weather, title } = locationData;
      return (
        // return a component
        <div>
          <h1>{consolidated_weather[0].the_temp}</h1>
          <h2>{consolidated_weather[0].weather_state_name}</h2>
          <h3>{consolidated_weather[0].applicable_date}</h3>
          <h4>{title}</h4>
        </div>
      )
    }
  }

  const renderWeekData = () => {
    if (locationData) {
      const { consolidated_weather } = locationData;
      return(
        <ul>
          {consolidated_weather.slice(1).map(day => {
            return <DayCard key={day.id} day={day} />
          })}
        </ul>
      )
    }
  }

  const [searchModalShown, setSearchModalShown] = useState(false);

  useEffect(() => {
    searchModalShown ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible';
  }, [searchModalShown])

  return(
    <Theme>
      <>
        <button 
          onClick={getCurrentLocationData}
        >
          Geo
        </button>
        
        <button 
          onClick={() => setSearchModalShown(true)}
        >
          Search Here
        </button>
        
        <SearchModal isShown={searchModalShown}>
          <button onClick={() => setSearchModalShown(false)}>Close</button>
          <SearchForm
            locations={locationInput}
            handleLocationSubmit={handleLocationSubmit}
            handleLocationChange={handleLocationChange}
          />
          {renderLocationsList()}
        </SearchModal>

        {renderCurrentLocation()}
        {console.log(locationData)}

        {renderWeekData()}
        
      </>
    </Theme>
  );
}

export default App;


/*
Dev:
-convert date format
-toggle Celcius & Farenheit
-create 'today's highlights cards' 
-create modal to hold search form and search results

Styling:
Everything
*/