import React from 'react';

const DayCard = ({ day }) => {
  const { applicable_date, max_temp, min_temp } = day;
  return(
    <div>
      <h2>{applicable_date}</h2>
      <h3>{max_temp}</h3>
      <h3>{min_temp}</h3>
    </div>
  )
}

export default DayCard;
