import React from 'react';

import Routing from './Routing';
import {Provider} from 'react-native-paper';

import Parse from 'parse/react-native.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-gesture-handler';

//Initializing the SDK.
Parse.setAsyncStorage(AsyncStorage);
//You need to copy BOTH the the Application ID and the Javascript Key from: Dashboard->App Settings->Security & Keys
Parse.initialize(
  'KzLdrKe9ACSQKsIRUZJKywKPqKHU1Bx9HJSbf0uZ',
  'DqSDzD6pDlghsaz9mzGpD688kDmAZ0gLiwdBBqPI',
);
Parse.serverURL = 'https://parseapi.back4app.com/';

const App = () => {
  return (
    <Provider>
      <Routing />
    </Provider>
  );
};
export default App;
