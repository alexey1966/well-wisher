import React from 'react';
import StartupComponent from './components/components/StartupComponent'
import { Provider } from 'react-redux'
import configureStore from './configureStore'

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <StartupComponent store={store} />
      </Provider>
    )
  }
}
