import seriesData from "../seriesData.json";

const Container = ({ children }) => {
  return (
    <div style={{ border: "2px solid black", padding: "10px", margin: "10px" }}>
      {children}
    </div>
  );
};

export const PassingChildren = () => {
  return (
    <Container>
      <h1>All About the Projects</h1>
      <p>PARAGRAPH</p>
      <ul>
        {seriesData.map((curr) => {
          return (
            <li key={curr.id}>
              <strong>Title:</strong> {curr.name} <br />
              <strong>Description:</strong> {curr.description}
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default PassingChildren;
