import './search-results.css';
/**
 *
 * @TODO
 * Should be wrapped in an anchor tag and go somewhere,
 * image should have a default if none is present.
 */
const EventResult = ({ image, title = '', subtitle = '' }) => (
  <>
    <li className="search-items">
      <img className="search-image" src={image} alt={title} />
      <span className="search-text">
        <div className="search-title">{title}</div>
        <div className="search-subtitle">{subtitle}</div>
      </span>
    </li>
    <hr />
  </>
);

export default EventResult;
