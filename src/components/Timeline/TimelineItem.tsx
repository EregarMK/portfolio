import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';
import './timelineItem.css';

type TimelineItemProps = {
  label?: string;
  right?: boolean;
  children: React.ReactNode;
};

const TimelineItem = ({ right, children, label }: TimelineItemProps) => {
  const [inView, handleInView] = useState(false);
  const isMobile = window.innerWidth < 768;
  const isRight = right || isMobile;

  return (
    <InView onChange={(inView) => handleInView(inView)}>
      <div
        className={`timeline-item-wrapper ${isRight ? 'timeline-item-wrapper-right' : ''}`}
      >
        <div
          className={`timeline-item-icon icon-suitcase ${inView ? 'pop' : 'hide'}`}
        ></div>
        <div
          className={`timeline-item-content ${inView ? `slideIn-${isRight ? 'right' : 'left'}` : 'hide'}`}
        >
          {children}
          <div className="timeline-label-wrapper">
            <div className="timeline-label-content">{label}</div>
          </div>
          <div className="timeline-item-arrow" />
        </div>
      </div>
    </InView>
  );
};

export default TimelineItem;
