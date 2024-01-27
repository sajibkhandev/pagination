import React, { useState } from 'react';
import Data from './allData/data';

const App = () => {
  let [all, setAll] = useState(Data);
  let [alldata, setAlldata] = useState([]);

  // let handleClick = (sajib) => {
  //   const foundItem = all.find((item) => item.name === sajib);
  //   if (foundItem) {
  //     setAlldata([foundItem.name]); 
  //   }
  // };
   let handleClick = (sajib) => {
    const filteredItems = all.filter((item) => item.name === sajib);
    setAlldata(filteredItems.map((item) => item.name));
  };
  // console.log(alldata[0]);

  return (
    <div>
      <div>
        <h3 onClick={() => handleClick('all')}>all</h3>
        <h3 onClick={() => handleClick('ecommerce')}>ecommerce</h3>
        <h3 onClick={() => handleClick('react')}>react</h3>
        <h3 onClick={() => handleClick('javascript')}>javascript</h3>
      </div>
      {alldata.map((item) => (
        item==="all"?
        <div>all</div>:item==="ecommerce"?<div>ecommerce</div>:item==="react"? <div>react</div> :<div></div>
       
        
      ))}
    </div>
  );
};

export default App;
