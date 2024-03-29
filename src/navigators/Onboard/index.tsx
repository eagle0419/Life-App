import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "@Navigators/routes";
import LoadingScreen from "@Screens/Loading";
import LandingScreen from "@Screens/Landing";
import EnterPhoneScreen from "@Screens/EnterPhone";
import VerifyOTPScreen from "@Screens/VerifyOTP";
import EnterEmailAndPassword from "@Screens/EnterEmailAndPassword";
import RegisterSuccessScreen from "@Screens/RegisterSuccess";
import DisplayNameAndAvatarScreen from "@Screens/DisplayNameAndAvatar";
import BottomTabNav from "@Navigators/BottomTab";
import RegisterProcessScreen from "@Screens/RegisterProcess";

const Stack = createNativeStackNavigator();

const OnboardStackNav: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: true, animationTypeForReplace: "pop" }} initialRouteName={Routes.Loading}>
      <Stack.Screen name={Routes.Loading} component={LoadingScreen} />
      <Stack.Screen name={Routes.Landing} component={LandingScreen} />
      <Stack.Screen name={Routes.EnterPhone} component={EnterPhoneScreen} />
      <Stack.Screen name={Routes.VerifyOTP} component={VerifyOTPScreen} />
      <Stack.Screen name={Routes.EnterEmailAndPassword} component={EnterEmailAndPassword} />
      <Stack.Screen name={Routes.DisplayNameAndAvatar} component={DisplayNameAndAvatarScreen} />
      <Stack.Screen name={Routes.RegisterProcess} component={RegisterProcessScreen} />
      <Stack.Screen name={Routes.RegisterSuccess} component={RegisterSuccessScreen} />
      <Stack.Screen name={Routes.BottomTabNav} component={BottomTabNav} />
    </Stack.Navigator>
  );
}

export default OnboardStackNav;