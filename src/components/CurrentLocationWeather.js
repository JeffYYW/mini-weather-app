import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  color: ${ props => props.theme.colors.white };
`;

const CurrentLocationWeather = ({ consolidated_weather, title }) => {
  const { weather_state_abbr, weather_state_name } = consolidated_weather[0];

  return(
    <StyledContainer>
      <img src={`https://www.metaweather.com/static/img/weather/${weather_state_abbr}.svg`} alt={`${weather_state_name}`} />
      <h1>{consolidated_weather[0].the_temp}</h1>
      <h2>{consolidated_weather[0].weather_state_name}</h2>
      <h3>{consolidated_weather[0].applicable_date}</h3>
      <h4>{title}</h4>
    </StyledContainer>
  )
}

export default CurrentLocationWeather;
