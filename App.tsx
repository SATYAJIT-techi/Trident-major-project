const Stack = createNativeStackNavigator();
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import WelcomePage from './screens/WelcomePage';
import Signup from './screens/Signup';
import Splash from './screens/Splash';
import Home from './screens/bottomTab/Home';
import PersonalInfo from './screens/PersonalInfo';
import Payment from './screens/bottomTab/Payment';
import CalendarPage from './screens/CalenderPage';
import Onboarding from './screens/Onboarding';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StudentPage from './screens/bottomTab/studentpage/StudentPage';

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: true}} initialRouteName='Home'>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="WelcomePage"
          component={WelcomePage}
          options={{headerShown: true}}
        />

        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="CalenderPage"
          component={CalendarPage}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
        name='Student'
        component={StudentPage}
        />
        {/* <Stack.Screen
          name="PersonalInfo"
          component={PersonalInfo}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{headerShown: true}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
