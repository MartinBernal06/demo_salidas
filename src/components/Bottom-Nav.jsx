import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Asegúrate de importar los íconos de manera adecuada
import { useNavigation } from '@react-navigation/native';

function ButtonNav() {
  const [selectedTab, setSelectedTab] = useState("Comprar Boletos");
  const navigation = useNavigation();
  // Utiliza useState para manejar el componente de pantalla actual

  const handleNavigate = (screenName) => {
    setSelectedTab(screenName);
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => handleNavigate("Comprar Boletos")} style={styles.button}>
          <MaterialCommunityIcons name="ticket-confirmation-outline" color={selectedTab === "Comprar Boletos" ? "#F05A28" : "#808082"} size={30} />
          <Text style={[styles.label, { color: selectedTab === "Comprar Boletos" ? "#F05A28" : "#808082" }]}>Comprar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigate("Horarios")} style={styles.button}>
          <MaterialCommunityIcons name="calendar" color={selectedTab === "Horarios" ? "#F05A28" : "#808082"} size={30} />
          <Text style={[styles.label, { color: selectedTab === "Horarios" ? "#F05A28" : "#808082" }]}>Horarios</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigate("Mis Viajes")} style={styles.button}>
          <MaterialCommunityIcons name="bag-checked" color={selectedTab === "Mis Viajes" ? "#F05A28" : "#808082"} size={30} />
          <Text style={[styles.label, { color: selectedTab === "Mis Viajes" ? "#F05A28" : "#808082" }]}>Mis Viajes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigate("Mi Cuenta")} style={styles.button}>
          <MaterialCommunityIcons name="account" color={selectedTab === "Mi Cuenta" ? "#F05A28" : "#808082"} size={30} />
          <Text style={[styles.label, { color: selectedTab === "Mi Cuenta" ? "#F05A28" : "#808082" }]}>Cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff', // Cambia el color de fondo según tu diseño
    elevation: 8, // Para darle una sombra
    zIndex: 9998,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },
  button: {
    alignItems: 'center',
  },
  label: {
    fontSize: 13,
    marginTop: 5,
  },
});

export default ButtonNav;