import React from 'react'

export const CommentDate = ({ createdAt }) => {

    const timeNow = Date.now();
    const milSec = timeNow - createdAt;
    const min = Math.floor(milSec / 60000);
    const hours = Math.floor(min / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7)
    var dateToDisplay = `${weeks} w`;
    if (min < 60) dateToDisplay =`${min} m`;
    else if (hours < 24) dateToDisplay =  `${hours} h`;
    else if (days <= 7) dateToDisplay =  `${days} d`;

    return (
        <span className='comment-date subtxt'>{dateToDisplay}</span>
    )
}
