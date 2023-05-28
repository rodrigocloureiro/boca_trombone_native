import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import AddClaim from './screens/AddClaimScreen';
import data from "./screens/assets/data.json";

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#F0F0F0'},
        headerTintColor: '#1D2530',
        drawerStyle: {backgroundColor: '#F0F0F0'}
      }}
    >
      <Drawer.Screen
        name='Início'
      >
        {() => <HomeScreen data={data} />}
      </Drawer.Screen>
      <Drawer.Screen
        name='Adicionar Reclamação'
      >
        {() => <AddClaim data={data} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};
