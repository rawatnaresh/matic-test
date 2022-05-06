/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {POSClient, use} from '@maticnetwork/maticjs';
import {Web3ClientPlugin} from '@maticnetwork/maticjs-web3';

AppRegistry.registerComponent(appName, () => App);
