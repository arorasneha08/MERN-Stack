import seriesData from "../seriesData.json";

const MapKeyword = () => {
  return (
    <ul>
      {seriesData.map((currElem) => {
        return (
          <div key={currElem.id}>
            <li>Watch at : {currElem.watch_url}</li>
            <li>Title : {currElem.name}</li>
            <li>Id : {currElem.id}</li>
            <li>
              Cast:
              <ul>
                {currElem.cast.map((actor, index) => (
                  <li key={index}>{actor}</li> 
                ))}
              </ul>
            </li>
            <li></li>
          </div>
        );
      })}
    </ul>
  );
};

export default MapKeyword;
