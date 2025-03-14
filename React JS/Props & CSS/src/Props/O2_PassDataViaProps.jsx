import seriesData from "../seriesData.json";
import SeriesCard from "../components/SeriesCard";

const PassDataViaProps = () => {
  return (
    <>
      {seriesData.map((item) => (
        <SeriesCard key={item.id} item={item} />
      ))}
    </>
  );
};

export default PassDataViaProps;
