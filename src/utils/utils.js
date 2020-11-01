import axios from 'axios';
import { weatherApi } from '../apis/api';

export const asyncGetCurrentPosition = (options) => new Promise((resolve, reject) => {
  window.navigator.geolocation.getCurrentPosition(resolve, reject, options);
  // https://www.telerik.com/blogs/converting-callbacks-to-promises
});

export const getLocationId = async (lat, long) => {
  try {
    let response = await axios.get(`${weatherApi}/search/?lattlong=${lat},${long}`);
    return response.data[0].woeid;

  } catch (error) {
    console.log(`Couldn't find location`);
  }
}

export const getLocationsByName = async (locationInput) => {
  try {
    let response = await axios.get(`${weatherApi}/api/location/search/?query=${locationInput}`);

    if (response.data.length === 0) {
      console.log('no matches found');
    } else {
      return response.data;
    }

  } catch (error) {
    console.log('error retrieving results');
  }
}

export const getLocationData = async (locationId) => {
  try {
    let response = await axios.get(`${weatherApi}/${locationId}/`);
    return response.data;

  } catch (error) {
    console.log('No location ID found');
  }
}
