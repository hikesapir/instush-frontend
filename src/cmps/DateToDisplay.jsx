import React from 'react'

export const DateToDisplay = ({createdAt}) => {
    const timeNow = Date.now();
    const milSec = timeNow - createdAt;
    const min = Math.floor(milSec / 60000);
    const hours = Math.floor(min / 60);
    const days = Math.floor(hours / 24);
    const date = new Date(createdAt);
    const day = date.getDate()
    const month = date.toLocaleString('en-us', { month: 'long' }).toUpperCase()
    const year = date.getFullYear();
    var dateToDisplay = `${month} ${day}, ${year}`;
    if (min < 60) dateToDisplay = min === 1 ? min + ' MINUTE AGO' : min + ' MINUTES AGO';
    else if (hours < 24) dateToDisplay = hours === 1 ? hours + ' HOUR AGO' : hours + ' HOURS AGO';
    else if (days <= 7) dateToDisplay = days === 1 ? days + ' DAY AGO' : days + ' DAYS AGO';

  return (
    <span>{dateToDisplay}</span>
  )
}
