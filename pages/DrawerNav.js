import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';

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
        component={HomeScreen}
      />
    </Drawer.Navigator>
  );
};
