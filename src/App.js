import Spinner from './componentes/spinner/Spinner';

import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const AppWeather = lazy(() => import('./componentes/AppWeather'));

function App() {
  return (
    <Router>
      <div>
        <Suspense fallback={<Spinner />}>
          <AppWeather />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
