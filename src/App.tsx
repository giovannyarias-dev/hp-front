import React from 'react';
import { Provider } from 'react-redux';

import { SocketProvider } from './context/SocketContext';
import { AppRouter } from './routes/AppRouter';
import { store } from './store/store';

function App(): JSX.Element {
  return (
    <Provider store={ store }>
      <SocketProvider>
        <AppRouter />
      </SocketProvider>
    </Provider>
  );
}

export default App;
