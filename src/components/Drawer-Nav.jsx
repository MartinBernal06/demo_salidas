import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Asegúrate de importar los íconos de manera adecuada
import { TouchableOpacity } from 'react-native-gesture-handler';

const CustomDrawerContent = ({ navigation }) => {

    const handleNavigate = (screenName) => {
        navigation.navigate(screenName);
    };

    const closeNavigate = () => {
        navigation.closeDrawer();
    }

    return (
        <DrawerContentScrollView style={styles.container}>
            <TouchableOpacity onPress={() => closeNavigate()}>
                <MaterialCommunityIcons style={styles.icon} name="close" color={'white'} size={50} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleNavigate("Comprar Boletos")}><Text style={styles.text}>Comprar boletos</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => handleNavigate("Consulta Horarios")}><Text style={styles.text}>Consulta horarios</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => handleNavigate("Mis Viajes")}><Text style={styles.text}>Mis viajes</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => handleNavigate("Tu Boleto")}><Text style={styles.text}>Tu boleto</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => handleNavigate("Mis Cupones")}><Text style={styles.text}>Mis cupones</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => handleNavigate("Mis Documentos")}><Text style={styles.text}>Mis documentos</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => handleNavigate("TufesaPack*")}><Text style={styles.text}>TufesaPack*</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => handleNavigate("Mi Cuenta")}><Text style={styles.text}>Mi cuenta</Text></TouchableOpacity>
            <Text style={styles.textVersion}>V6036</Text>
        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F05A28',
        height: '100%',
        width: '100%',
        position: 'absolute',
    },
    text: {
        color: 'white',
        fontSize: 20,
        paddingTop: 15,
        paddingLeft: 50
    },
    icon: {
        margin: 10,
        paddingBottom: 30
    },
    textVersion: {
        color: 'white',
        fontSize: 12,
        paddingLeft: 50,
        top: 100
    }
});

export default CustomDrawerContent;