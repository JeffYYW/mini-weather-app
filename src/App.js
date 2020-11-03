import React, { useEffect, useState } from 'react';
import { asyncGetCurrentPosition, getLocationId, getLocationData, getLocationsByName } from './utils/utils';
import './App.css';

import Theme from './Theme';
import SearchForm from './components/SearchForm';
import SearchModal from './components/SearchModal';
import LocationsList from './components/LocationsList';
import PrimaryDisplay from './components/PrimaryDisplay';
import SecondaryDisplay from './components/SecondaryDisplay';
import ButtonsContainer from './components/ButtonsContainer';
import CurrentLocationWeather from './components/CurrentLocationWeather';
import WeekContainer from './components/WeekContainer';

const App = () => {
  const [locationData, setLocationData] = useState(null);
  const [locationInput, setLocationInput] = useState('');
  const [locationsList, setLocationsList] = useState(null);
  const [searchModalShown, setSearchModalShown] = useState(false);

  useEffect(() => {
    searchModalShown ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible';
  }, [searchModalShown])

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
        <CurrentLocationWeather 
          consolidated_weather={consolidated_weather} 
          title={title}
        />
      )
    }
  }

  const renderWeekData = () => {
    if (locationData) {
      const { consolidated_weather } = locationData;
      return(
        <WeekContainer consolidated_weather={consolidated_weather} />
      )
    }
  }

  return(
    <Theme>
      <>
        <PrimaryDisplay>
          <ButtonsContainer 
            getCurrentLocationData={getCurrentLocationData} 
            setSearchModalShown={setSearchModalShown} 
          />
          {renderCurrentLocation()}
        </PrimaryDisplay>

        <SearchModal 
          isShown={searchModalShown} 
          setSearchModalShown={setSearchModalShown}
        >
          <SearchForm
            locations={locationInput}
            handleLocationSubmit={handleLocationSubmit}
            handleLocationChange={handleLocationChange}
          />
          {renderLocationsList()}
        </SearchModal>

        {console.log(locationData)}

        <SecondaryDisplay>
          {renderWeekData()}
        </SecondaryDisplay>
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
-loading states

Styling:
Everything
*/