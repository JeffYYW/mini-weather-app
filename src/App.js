import React, { useState } from 'react';
import { asyncGetCurrentPosition, getLocationId, getLocationData, getLocationsByName } from './utils/utils';

import SearchForm from './components/SearchForm';
import DayCard from './components/DayCard';

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

  const handleLocationClick = async (id) => {
    let location = await getLocationData(id);
    setLocationData(location);
  }

  const renderLocationsList = () => {
    if (locationsList) {
      return locationsList.map((item, index) => (
        // return a component
        <li
          key={index}
          data-id={item.woeid}
          onClick={() => handleLocationClick(item.woeid)}
        >
          {item.title}
        </li>
      ))
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

  return(
    <div>
      <button onClick={getCurrentLocationData}>Geo</button>
      
      <SearchForm 
        locations={locationInput}
        handleLocationSubmit={handleLocationSubmit}
        handleLocationChange={handleLocationChange}
      />

      <ul>{renderLocationsList()}</ul>

      {renderCurrentLocation()}
      {console.log(locationData)}

      {renderWeekData()}
      
    </div>
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