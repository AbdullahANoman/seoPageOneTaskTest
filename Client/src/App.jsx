import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Incomplete from "./Components/Incomplete";
import Todo from "./Components/Todo";
import Doing from "./Components/Doing";
import UnderReview from "./Components/UnderReview";
import Completed from "./Components/Completed";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-[100vh] bg-white p-4  ">
        <div className="flex overflow-x-auto h-[90vh] ">
          {/* Your content here */}
          <div className="flex">
            <Incomplete />
            <Todo />
            <Doing />
            <UnderReview />
            <Completed />
          </div>
          {/* <div className="bg-gray-200 p-4 ml-10">
            <div className="w-[200px] mx-auto  bg-white rounded-md shadow-md overflow-hidden">
              <div className="p-4">
                <div className="max-h-48 overflow-y-auto"></div>
              </div>
              <div className="p-4">
                <div className="max-h-48 overflow-y-auto"></div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
