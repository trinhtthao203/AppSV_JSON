import React from 'react';
import {createAppContainer} from 'react-navigation';
import AppNavigator from './AppNavigator';

import axios from 'axios';

const AppContainer = createAppContainer(AppNavigator);

//ngrok
axios.defaults.baseURL='http://9a90dae94684.ngrok.io';
export default class App extends React.Component {
  render(){    
    return (
      <AppContainer/>
    );
  }
}
