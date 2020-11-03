import React from 'react';
import styled from 'styled-components';
import DayCard from './DayCard';

const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 40px;
`;

const WeekContainer = ({consolidated_weather}) => {
  return(
    <StyledUl>
      {consolidated_weather.slice(1).map((day, index) => {
        return <DayCard key={day.id} day={day} index={index} />
      })}
    </StyledUl>
  )
}

export default WeekContainer;
