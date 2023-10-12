// import React from "react";
// import "./App.css";
// import "./index.css";
// import jsonData from "./Data/emojiList.json";
// import NavBar from "./Compoments/NavBar";

// function App() {
//   return (
//     <>
//       <div>
//       <NavBar />
//         {jsonData.map((data) => {
//           const {symbol, keywords } = data;
//           return (
//             <div className="bg-green-200 pt-8">
//               <div className="container mx-auto">
//                 <div className="flex justify-evenly mx-4 p-4 items-center rounded-lg bg-green-300">
//                   <div className="w-20 h-20 bg-green-200 rounded flex items-center justify-center">
//                     <h1 className="text-4xl">{symbol}</h1>
//                   </div>
//                   <div className="w-1/2 h-0.5 bg-green-600 rounded"></div>
//                   <div className="w-80 h-20 bg-green-200 rounded flex text-center items-center justify-center">
//                     <h1 className="text-base px-4 py-2">{keywords}</h1>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <NavBar />

//     </>
//   );
// }

// export default App;


// src/App.js
import React from 'react';
import './App.css';
import Search from './Compoments/NavBar';

function App() {
  return (
    <div className="App">
    <Search />
    </div>
  );
}

export default App;
