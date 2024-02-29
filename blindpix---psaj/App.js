import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Landing from './components/Pages/landingpage';
import Login from './components/Pages/loginpage';
import AdminLogin from './components/Pages/adminloginpage';
import Register from './components/Pages/registerpage';
import Home from './components/Pages/homepage';
import Easy from './components/Pages/easypage';
import Medium from './components/Pages/mediumpage';
import Hard from './components/Pages/hardpage';
import QuizEasy from './components/Pages/quizeasypage';
import QuizMedium from './components/Pages/quizmedium';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={Landing} options={{headerShown: false,}}/>
        <Stack.Screen name="AdminLogin" component={AdminLogin} options={{headerShown: false,}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false,}}/>
        <Stack.Screen name="Register" component={Register} options={{headerShown: false,}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false,}}/>
        <Stack.Screen name="Easy" component={Easy} options={{headerShown: false,}}/>
        <Stack.Screen name="Medium" component={Medium} options={{headerShown: false,}}/>
        <Stack.Screen name="Hard" component={Hard} options={{headerShown: false,}}/>
        <Stack.Screen name="QuizEasy" component={QuizEasy} options={{headerShown: false,}}/>
        <Stack.Screen name="QuizMedium" component={QuizMedium} options={{headerShown: false,}}/>
                
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
