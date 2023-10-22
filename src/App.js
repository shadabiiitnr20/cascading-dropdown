import { useState } from "react";
import "./App.css";
import { states, cities } from "./constants/data";

function App() {
  const [selectedState, setSelectedState] = useState(states[0]);

  // console.log(selectedState);

  return (
    <div>
      <h2 className="underline text-xl font-bold m-4">Cascading Dropdown</h2>
      <div>
        <select
          className="m-4 border border-solid border-black w-14 rounded-lg"
          onChange={(e) => setSelectedState(e.target.value)}
        >
          {states.map((state, i) => {
            return <option key={i}>{state}</option>;
          })}
        </select>
        {selectedState && (
          <>
            <select className="m-4 border border-solid border-black w-28 rounded-lg">
              {cities[selectedState].map((city, i) => {
                return <option key={i}>{city}</option>;
              })}
            </select>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
