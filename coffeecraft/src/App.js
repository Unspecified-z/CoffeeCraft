import React from 'react';
import Header from './Header';
import Head from './Head';
import ServerProvider from './ServerProvider';
import ServerInformation from './ServerInformation';

function App() {
  return (
    <div>
        <Header />
        <Head />
        <ServerProvider />
        <ServerInformation />
      </div>
  );
}

export default App;