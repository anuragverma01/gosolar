import React from "react";

import Routing from "./Routing";
import { Provider } from "react-native-paper";


import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage';


//Initializing the SDK. 
Parse.setAsyncStorage(AsyncStorage);
//You need to copy BOTH the the Application ID and the Javascript Key from: Dashboard->App Settings->Security & Keys 
Parse.initialize('fOG7DPHxhdlUqLDzcHsJHaJvtMLpSyvmjEqVxLDy','MaD89dGtdmBozVa00ZZtJzjxYN9107X1n5bKPxnE');
Parse.serverURL = 'https://parseapi.back4app.com/';

const App = () =>{
  return(
<Provider>
<Routing />
</Provider>
  );

}
export default App;