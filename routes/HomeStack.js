import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Welcome from '../screens/Welcome';
import DisablePage from '../screens/DisablePage';
import Home from '../screens/Home'
import ForgotPassword from '../screens/ForgotPassword'
import Navbar from '../components/Navbar';
import AskHelp from '../screens/AskHelp';
import HelepPerson from '../screens/HelepPerson'
import Notification from '../screens/Notification';
import Donate from '../screens/Donate'
import DonorDetailsOne from '../screens/DonorDetailsOne';
import DonorDetailsTwo from '../screens/DonorDetailsTwo';
import Urgent from '../screens/Urgent';
import Payment from '../screens/Payment'
import Events from '../screens/Events'
import BetaFund from '../screens/BetaFund'
import EventDetails from '../screens/EventDetails';
import Settings from '../screens/Settings';
import EditProfile from '../screens/EditProfile';
import Watch from '../screens/Watch';
import Logout from '../components/Logout';
import Success from '../components/Success'
import PostEvent from '../screens/PostEvent';
import Feedback from '../screens/Feedback';
import Code from '../screens/Code';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" options={{ headerShown:false }} component={Welcome} />
      <Stack.Screen name="Login" options={{ headerShown:false }} component={Login} />
      <Stack.Screen name="AskHelp" options={{ headerShown:false }} component={AskHelp} />
      <Stack.Screen name="BetaFund" options={{ headerShown:false }} component={BetaFund} />
      <Stack.Screen name="Code" options={{ headerShown:false }} component={Code} />
      <Stack.Screen name="DisablePage" options={{ headerShown:false }} component={DisablePage} />
      <Stack.Screen name="Donate" options={{ headerShown:false }} component={Donate} />
      <Stack.Screen name="DonorDetailsOne" options={{ headerShown:false }} component={DonorDetailsOne} />
      <Stack.Screen name="DonorDetailsTwo" options={{ headerShown:false }} component={DonorDetailsTwo} />
      <Stack.Screen name="EditProfile" options={{ headerShown:false }} component={EditProfile} />
      <Stack.Screen name="EventDetails" options={{ headerShown:false }} component={EventDetails} />
      <Stack.Screen name="Events" options={{ headerShown:false }} component={Events} />
      <Stack.Screen name="Feedback" options={{ headerShown:false }} component={Feedback} />
      <Stack.Screen name="ForgotPassword" options={{ headerShown:false }} component={ForgotPassword} />
      <Stack.Screen name="HelepPerson" options={{ headerShown:false }} component={HelepPerson} />
      <Stack.Screen name="Home" options={{ headerShown:false }} component={Home} />
      <Stack.Screen name="Notification" options={{ headerShown:false }} component={Notification} />
      <Stack.Screen name="Payment" options={{ headerShown:false }} component={Payment} />
      <Stack.Screen name="PostEvent" options={{ headerShown:false }} component={PostEvent} />
      <Stack.Screen name="Settings" options={{ headerShown:false }} component={Settings} />
      <Stack.Screen name="Urgent" options={{ headerShown:false }} component={Urgent} />
      <Stack.Screen name="Watch" options={{ headerShown:false }} component={Watch} />
      <Stack.Screen name="Logout" options={{ headerShown:false }} component={Logout} />
      <Stack.Screen name="Success" options={{ headerShown:false }} component={Success} />
      <Stack.Screen name="Navbar" options={{ headerShown:false }} component={Navbar} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};
export default HomeStack;