import React, { lazy, Suspense } from "react";
import { Wrapper } from "./App.style";
const Pomodoro = lazy(() => import("../Pomodoro/Pomodoro"));

const renderLoader = () => <p>Loading...</p>;

function App() {
  return (
    <Wrapper data-testid="App">
      <Suspense fallback={renderLoader()}>
        <Pomodoro />
      </Suspense>
    </Wrapper>
  );
}

export default App;
