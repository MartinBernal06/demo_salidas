import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Importar componentes
import Horarios from './Horarios.jsx';
import MiCuenta from './Mi-Cuenta.jsx';
import MisViajes from './Mis-Viajes.jsx';
import Index from './Index.jsx';
import Salidas from './Salidas.jsx';
import BottomNav from './Bottom-Nav.jsx';
import CustomDrawerContent from './Header-App.jsx';

// const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        header: props => <CustomDrawerContent {...props} />,
      }}
      drawerStyle={{
        backgroundColor: '#F05A28', // Color de fondo del cajón
      }}
    >
      <Drawer.Screen name="Comprar Boletos" component={Salidas} />
      <Drawer.Screen name="Consulta Horarios" component={Horarios} />
      <Drawer.Screen name="Mis Viajes" component={MisViajes} />
      <Drawer.Screen name="Tu Boleto" component={Index} />
      <Drawer.Screen name="Mis Cupones" component={Index} />
      <Drawer.Screen name="Mis Documentos" component={Index} />
      <Drawer.Screen name="TufesaPack*" component={Index} />
      <Drawer.Screen name="Mi Cuenta" component={MiCuenta} />

      {/* Other Routes: Las que no se ven pero siguen sirviendo para navegar */}
      <Drawer.Screen name="Horarios" component={Horarios} options={{ drawerLabel: () => null }} />
    </Drawer.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
      <BottomNav />
    </NavigationContainer>
  );
}