import React from 'react';
import styled from 'styled-components';

const HighlightsContainer = styled.div`
  padding: 24px;

  h2 {
    color: ${ props => props.theme.colors.white };
  }
`;

const Card = styled.div`
  background-color: ${ props => props.theme.colors.primary };
  margin: 24px 0;
  padding: 8px;
  color: ${ props => props.theme.colors.white };
  text-align: center;

  p {
    font-size: 80px;
  }
`;

const Highlights = ({consolidated_weather}) => {
  const { 
    wind_direction_compass, 
    wind_speed, 
    humidity,
    visibility,
    air_pressure
  } = consolidated_weather;

  return(
    <HighlightsContainer>
      <h2>Today's Highlights</h2>
      <Card>
        <h3>Wind Status</h3>
        <p>{wind_speed}</p>
        <p>{wind_direction_compass}</p>
      </Card>

      <Card>
        <h3>Humidity</h3>
        <p>{humidity}</p>
      </Card>

      <Card>
        <h3>Visibility</h3>
        <p>{visibility} miles</p>
      </Card>

      <Card>
        <h3>Air Pressure</h3>
        <p>{air_pressure} mb</p>
      </Card>
    </HighlightsContainer>
  )
}

export default Highlights;
