/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {use} from '@maticnetwork/maticjs';
import {Web3ClientPlugin} from '@maticnetwork/maticjs-web3';

// install web3 plugin
use(Web3ClientPlugin);

AppRegistry.registerComponent(appName, () => App);
