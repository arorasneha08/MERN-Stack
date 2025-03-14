const SeriesCard = (props) => {
  const { id, img_url, name, rating, description, cast, genre, watch_url } = props.item;

  return (
    <ul>
      <li>
        Watch at:{" "}
        <a href={watch_url} target="_blank" rel="noopener noreferrer">
          {watch_url}
        </a>
      </li>
      <li>Title: {name}</li>
      <li>Id: {id}</li>
      <li>
        Cast:
        <ul>
          {cast.map((actor, index) => (
            <li key={index}>{actor}</li>
          ))}
        </ul>
      </li>
    </ul>
  );
};

export default SeriesCard;
