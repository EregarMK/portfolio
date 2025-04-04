import TimelineItem from './TimelineItem';
import './timeline.css';
import Itembox from '../Itembox/Itembox';
import { Project } from '../../assets/data';

const Timeline = ({ data }: { data: Project[] }) => {
  return (
    <div className="timeline-wrapper">
      {data.map((item, index) => {
        return (
          <TimelineItem
            key={item.project}
            right={!!(index % 2)}
            label={`${item.company ? `${item.company}, ` : ''}${item.label}`}
          >
            <Itembox {...item} />
          </TimelineItem>
        );
      })}
    </div>
  );
};

export default Timeline;
