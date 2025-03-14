const fruits = [
    "sabzi",
    "green vegetable",
    "mango",
    "banana",
    "papaya",
    "grapes",
  ];
  
  const PassingFunctionViaProps = () => {
    return (
      <>
        <ul>
          {fruits.map((item) => {
            return (
              <ChildComponent
                key={item}
                item={item}
                handleBuyButton={() => console.log(`${item} purchased !! `)}
              />
            );
          })}
        </ul>
      </>
    );
  };
  
  export default PassingFunctionViaProps;
  
  export const ChildComponent = ({ item, handleBuyButton }) => {
    return (
      <>
        <li>
          <span>{item}</span>
          <button onClick={handleBuyButton}>Buy</button>
        </li>
      </>
    );
  };
  