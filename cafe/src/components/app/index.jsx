import React from 'react';
import { ErrorBoundary } from '../error-boundary/error-boundary';
import Footer from '../footer';
import Header from '../header';
import Menu from '../menu';
import { Provider } from 'react-redux';
import store from '../../redux/store';

function App() {
  return (
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <Provider store={store}>
        <Header />
        <Menu />
        <Footer />
      </Provider>
    </ErrorBoundary>
  )
}

export default App;