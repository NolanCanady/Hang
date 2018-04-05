import React from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import SplashScreen from './screens/splash.screen';
import AgeScreen from './screens/loginsignup.screen';
import FirstNameScreen from './screens/firstname.screen';
import LastNameScreen from './screens/lastname.screen';
import GenderScreen from './screens/gender.screen';
import PhoneNumberScreen from './screens/phoneNumber.screen';
import MapScreen from './screens/map.screen';
import HomeScreen from './screens/home.screen';
import TestScreen from './screens/test.screen';

const Splash={
  screen: SplashScreen,
  navigationOptions: {
    header: null
  }
}

const Age={
  screen: AgeScreen,
  navigationOptions: {
    header: null
  }
}

const FirstName={
  screen: FirstNameScreen,
  navigationOptions:{
    header:null
  }
}

const LastName={
  screen: LastNameScreen,
  navigationOptions:{
    header:null
  }
}

const Gender={
  screen: GenderScreen,
  navigationOptions:{
    header:null
  }
}

const PhoneNumber={
  screen: PhoneNumberScreen,
  navigationOptions:{
    header:null
  }
}

const MapTest={
  screen:MapScreen,
  navigationOptions:{
    header:null
  }
}

const HomeTest={
  screen: HomeScreen,
  navigationOptions:{
    header:null
  }
}

const TestTest={
  screen:TestScreen,
  navigationOptions:{
    header:null
  }
}

const RouteConfig = {
  initialRoute: 'Splash'
}

const SignupStack = StackNavigator({
  Age: Age,
  FirstName: FirstName,
  LastName: LastName,
  Gender: Gender,
  PhoneNumber: PhoneNumber,
  MapTest: MapTest,
  HomeScreen: HomeTest,
  TestTest: TestTest
},{})

const AppNavigator = DrawerNavigator({
  Splash: Splash,
  Home: HomeTest,
  SignUp: {screen: SignupStack}
}, RouteConfig)

export default AppNavigator;
