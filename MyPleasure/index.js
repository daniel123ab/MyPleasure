/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import Main from './Main';
import {name as appName} from './app.json';
console.disableYellowBox = true;
// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => Main);
