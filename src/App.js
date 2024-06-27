

import React from "react";
import { Suspense, lazy } from "react";
//import Component1 from "./components/Component1";
//import Component2 from "./components/Component2";

const Component1 = lazy(() => import('./components/Component1'));
const Component2 = lazy(() => import('./components/Component2'));

function App() {
  return (

    <>
      <h1> Lazy Load</h1>
      <Suspense fallback=
        {<div>Component1 are loading please wait...</div>}>
        <Component1 />
      </Suspense>
      <Suspense fallback=
        {<div>Component2 are loading please wait...</div>}>
        <Component2 />
      </Suspense>
    </>

/*     <>
    <Component1 />
    <Component2 />
    </> */
  );
}

export default App;
