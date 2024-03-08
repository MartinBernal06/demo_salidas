import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';

const CustomDrawerHeader = (props) => {
    const navigation = useNavigation();

    const handleDrawerOpen = () => {
        navigation.openDrawer();
    };

    const handleNavigate = (screenName) => {
        navigation.navigate(screenName);
    };

    return (
        <DrawerContentScrollView style={styles.top} {...props}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.column}>
                    <MaterialCommunityIcons onPress={handleDrawerOpen} name="backburger" color="#F05A28" size={30} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.column2, styles.centerColumn]} onPress={() => handleNavigate("Comprar Boletos")}>
                    <Image source={require('../../assets/logo200x66.png')} style={styles.image} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.column3}>
                    <MaterialCommunityIcons name="bell-badge-outline" color="#F05A28" size={30} />
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    top: {
        top: -3
    },
    header: {
        width: '100%',
        height: 80,
        paddingTop: 36,
        backgroundColor: '#fff', // Fondo blanco
        flexDirection: 'row', // Distribución horizontal
    },
    column: {
        flex: 0.2, // Ocupa el 20% del ancho total
        alignItems: 'center',
        top: -10
    },
    column2: {
        flex: 0.6, // Ocupa el 20% del ancho total
        alignItems: 'center',
    },
    column3: {
        flex: 0.2, // Ocupa el 20% del ancho total
        alignItems: 'center',
        top: -10
    },
    centerColumn: {
        alignItems: 'center', // Centra el contenido en el segundo contenedor
    },
    image: {
        width: '100%', // Tamaño de las imágenes
        height: '100%', // Tamaño de las imágenes
        resizeMode: 'contain',
        top: -20 // Ajustar imagen dentro del contenedor
    },
});

export default CustomDrawerHeader;