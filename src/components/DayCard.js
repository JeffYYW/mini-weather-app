import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: ${ props => props.theme.colors.primary };
  color: ${ props => props.theme.colors.grey };
  margin: 10px;
  width: calc(50% - 20px);
  padding: 12px;
`;

const DayCard = ({ day, index }) => {
  const { applicable_date, max_temp, min_temp, weather_state_abbr, weather_state_name } = day;

  return(
    <Card>
      {index === 0 ? <h3>Tomorrow</h3> : <h3>{applicable_date}</h3>}
      <img src={`https://www.metaweather.com/static/img/weather/${weather_state_abbr}.svg`} alt={`${weather_state_name}`} />
      <p>{max_temp}</p>
      <p>{min_temp}</p>
    </Card>
  )
}

export default DayCard;

