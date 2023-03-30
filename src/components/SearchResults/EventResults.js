import EventResult from './EventResult';
import './search-results.css';

const MAX_RESULTS = 3;

const EventResults = ({ data }) => (
  <ul className="search-results-container">
    {data.events.slice(0, MAX_RESULTS).map((event) => (
      <EventResult
        key={event.event.id}
        image={event.performers[0].hero_image_url}
        title={event.event.name}
        subtitle={event.venue.name}
      />
    ))}
    {data.performers.slice(0, MAX_RESULTS).map((performer) => (
      <EventResult
        key={performer.id}
        image={performer.hero_image_url}
        title={performer.name}
        subtitle={performer.category}
      />
    ))}
    {data.venues.slice(0, MAX_RESULTS).map((venue) => (
      <EventResult
        key={venue.id}
        image={venue.image_url}
        title={venue.name}
        subtitle={venue.city}
      />
    ))}
  </ul>
);

export default EventResults;
