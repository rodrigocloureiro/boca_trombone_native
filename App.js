import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./pages/screens/SplashScreen";
import { NavigationContainer } from "@react-navigation/native";
import { useState, useEffect } from "react";
import DrawerNav from "./pages/DrawerNav";
import LoginScreen from "./pages/screens/LoginScreen";
import InfoCompany from "./pages/screens/InfoCompany";
import mockLogin from "./pages/screens/assets/mockLogin.json";
import data from "./pages/screens/assets/data.json";

const Stack = createStackNavigator();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [companies, setCompanies] = useState(data);
  const [users, setUsers] = useState(mockLogin);
  const [userLogged, setUserLogged] = useState("");

  useEffect(() => {
    const interval = setInterval(() => setAppIsReady(true), 1000);
    return () => clearInterval(interval);
  }, []);

  const addClaim = (selectedCompany, claim, nome, sobrenome, username) => {
    const date = new Date();
    setCompanies(
      companies.map((item) => {
        return item.nome === selectedCompany
          ? {
              ...item,
              reclamacoes: [
                ...item.reclamacoes,
                {
                  data: date.toISOString().replaceAll("-", "/").split("T")[0],
                  horario: date.toLocaleTimeString(),
                  id: item.reclamacoes.length + 1,
                  nome: nome,
                  reclamacao: claim,
                  sobrenome: sobrenome,
                  status: "Aberta",
                  username: username,
                },
              ],
            }
          : item;
      })
    );
    alert("Reclamação enviada!");
  };

  const handleLogin = (username, password) => {
    users.forEach((user) => {
      if (user.username === username && user.senha === password) {
        setUserLogged(user);
        setIsLogged(true);
      }
    });
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!appIsReady && !isLogged && (
          <Stack.Screen name="Splash" component={SplashScreen} />
        )}
        {!isLogged && (
          <Stack.Screen name="Login">
            {() => <LoginScreen handleLogin={handleLogin} />}
          </Stack.Screen>
        )}
        <Stack.Screen name="Home">
          {() => (
            <DrawerNav
              companies={companies}
              addClaim={addClaim}
              userLogged={userLogged}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Info Company"
          options={{ title: "Perfil da Empresa", headerShown: true }}
          component={InfoCompany}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
