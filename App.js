import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./pages/screens/SplashScreen";
import { NavigationContainer } from "@react-navigation/native";
import { useState, useEffect } from "react";
import DrawerNav from "./pages/DrawerNav";
import LoginScreen from "./pages/screens/LoginScreen";

const Stack = createStackNavigator();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [isLogged, setIsLogged] = useState(true);
  const mockLogin = [
    { username: "@rodrigocosta34", password: "Teste@123" },
    { username: "@mariasouza", password: "Teste@12345" },
  ];

  useEffect(() => {
    const interval = setInterval(() => setAppIsReady(true), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <NavigationContainer>
      {(!appIsReady || !isLogged) && (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!appIsReady && (
            <Stack.Screen name="Splash" component={SplashScreen} />
          )}
          <Stack.Screen name="Login">
            {() => <LoginScreen mockLogin={mockLogin} setIsLogged={setIsLogged} />}
          </Stack.Screen>
        </Stack.Navigator>
      )}
      {appIsReady && isLogged && <DrawerNav />}
    </NavigationContainer>
  );
}
