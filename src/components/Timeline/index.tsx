import React from 'react';
import TimelineItem from './TimelineItem';
import './index.css';
import Itembox from '../Itembox';
import { ProjectProps } from '../../assets/data';

type TimelineProps = {
    data: Array<ProjectProps>
}

const Timeline = ({data}: TimelineProps) => {
    return (
        <div className='timeline-wrapper'>
            {data.map((item, index) => {
                return (<TimelineItem key={item.project} right={!!(index%2)} label={`${item.company ? `${item.company}, ` : ''}${item.label}`}>
                    <Itembox {...item}/>
                </TimelineItem>)
            })}
        </div>
    );
};

export default Timeline;