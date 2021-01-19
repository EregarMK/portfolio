import React from 'react';
import TimelineItem from './TimelineItem';
import './index.css';
import date from '../../assets/data';
import Itembox from '../Itembox';

const Timeline = () => {
    return (
        <div className='timeline-wrapper'>
            {date.map((item, index) => {
                return (<TimelineItem key={item.project} right={!!(index%2)}>
                    <Itembox {...item}/>
                </TimelineItem>)
            })}
        </div>
    );
};

export default Timeline;