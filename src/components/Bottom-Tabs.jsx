import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createDrawerNavigator } from '@react-navigation/drawer';

//components
import Home from './Home.jsx'
import Index from './Index.jsx'
import Salidas from './Salidas.jsx'
import CustomDrawerContent from './Header-App.jsx'

const Tab = createBottomTabNavigator();
const HomeStackNavigatior = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MyStack() {
  return (
    <HomeStackNavigatior.Navigator
      initialRouteName='Home'
    >
      <HomeStackNavigatior.Screen
        name='Home'
        component={Salidas}
      />
      <HomeStackNavigatior.Screen
        name='Home'
        component={Salidas}
      />
    </HomeStackNavigatior.Navigator>
  )
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Comprar"
      screenOptions={{
        tabBarActiveTintColor: "#F05A28"
      }}
    >
      <Tab.Screen
        name="Comprar"
        component={Salidas}
        options={{
          tabBarLabel: "Comprar",
          tabBarLabelStyle: { fontSize: 13 },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="ticket-confirmation-outline" color={color} size={30} />
          ),
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Horarios"
        component={Index}
        options={{
          tabBarLabel: "Horarios",
          tabBarLabelStyle: { fontSize: 13 },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={30} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Mis Viajes"
        component={Home}
        options={{
          tabBarLabel: "Mis Viajes",
          tabBarLabelStyle: { fontSize: 13 },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bag-checked" color={color} size={30} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Cuenta"
        component={Index}
        options={{
          tabBarLabel: "Cuenta",
          tabBarLabelStyle: { fontSize: 13 },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={30} />
          ),
          headerShown: false,
          tabBarBadge: 5
        }}
      />
    </Tab.Navigator>
  );
}

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        header: props => <CustomDrawerContent {...props} />, // Utiliza CustomDrawerContent como el encabezado
      }}
    >
      <Drawer.Screen name="Main" component={MyTabs} />
    </Drawer.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}