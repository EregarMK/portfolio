import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';
import './timelineItem.css';

type TimelineItemProps = {
    label?: string,
    right?: boolean,
    children: React.ReactNode
}

const TimelineItem = ({right, children, label}: TimelineItemProps) => {
    const [isAnimated, onAnimation] = useState(false)
    return (
        <InView onChange={(inView, entry) => onAnimation(inView)}>
            <div className={`timeline-item-wrapper timeline-item-wrapper-${right ? 'right' : ''}`}>
                <div className={`timeline-item-icon icon-suitcase ${isAnimated ? 'pop' : ''}`}></div>
                <div className={`timeline-item-content ${isAnimated ? `slideIn-${right ? 'right' : 'left'}` : ''}`}>
                    {children}
                    <div className='timeline-label-wrapper'><div className='timeline-label-content'>{label}</div></div>
                    <div className='timeline-item-arrow' />
                </div>
            </div>
        </InView>
    )
};

export default TimelineItem;