import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Asegúrate de importar los íconos de manera adecuada
import { useFonts } from 'expo-font';

function ResumenSup({ pasoSeleccionado }) {
    const [fontsLoaded] = useFonts({
        'Termina-Regular': require('../assets/fonts/Termina-Regular.otf'),
        'Termina-Heavy': require('../assets/fonts/Termina-Heavy.otf'),
        'Termina-Bold': require('../assets/fonts/Termina-Bold.otf'),
        'Neue-Unica': require('../assets/fonts/NeueHaasUnicaW1G-Regular.otf')
    });

    const renderPasos = () => {
        switch (pasoSeleccionado) {
            case 1:
                return (
                    <View style={styles.seccionA}>
                        <View style={styles.itemA}>
                            <Text style={[styles.pasos, styles.active]}>1</Text>
                            <Text style={[styles.pasos, styles.active]}> Horarios</Text>
                        </View>
                        <View style={styles.line2}></View>
                        <View style={styles.itemB}>
                            <Text style={styles.pasos}>2</Text>
                            <Text style={styles.pasos}>Asientos</Text>
                        </View>
                        <View style={styles.line2}></View>
                        <View style={styles.itemC}>
                            <Text style={styles.pasos}>3</Text>
                            <Text style={styles.pasos}>Pago</Text>
                        </View>
                    </View>
                );
            case 2:
                return (
                    <View style={styles.seccionA}>
                        <View style={styles.itemA}>
                            <TouchableOpacity onPress={regresoSalidas}> <Text style={styles.pasos}>1{'\n'}</Text>Horarios</TouchableOpacity>
                        </View>
                        <View style={styles.line2}></View>
                        <View style={styles.itemA}>
                            <Text style={styles.active}> <Text style={[styles.pasos, styles.active]}>2{'\n'}</Text>Asientos</Text>
                        </View>
                        <View style={styles.line2}></View>
                        <View style={styles.itemA}>
                            <Text> <Text style={styles.pasos}>3{'\n'}</Text>Pago</Text>
                        </View>
                    </View>
                );
            case 3:
                return (
                    <View style={styles.seccionA}>
                        <View style={styles.itemA}>
                            <TouchableOpacity onPress={regresoSalidas}> <Text style={styles.pasos}>1{'\n'}</Text>Horarios</TouchableOpacity>
                        </View>
                        <View style={styles.line2}></View>
                        <View style={styles.itemA}>
                            <Text> <Text style={styles.pasos}>2{'\n'}</Text>Asientos</Text>
                        </View>
                        <View style={styles.line2}></View>
                        <View style={styles.itemA}>
                            <Text style={styles.active}> <Text style={[styles.pasos, styles.active]}>3{'\n'}</Text>Pago</Text>
                        </View>
                    </View>
                );
            default:
                return null;
        }
    };

    const regresoSalidas = () => {
        // Implementa la lógica necesaria para regresar a la sección de salidas
    };

    return (
        <View style={styles.container}>
            <View style={{ marginBottom: 20 }}>{renderPasos()}</View>
            <View>
                <View style={styles.seccionB}>
                    <Text style={[styles.ciudad, styles.itemA]}>CD. OBREGON</Text>
                    <MaterialCommunityIcons style={[styles.icon, styles.itemB]} name="arrow-right" color={'#93939f'} size={40} />
                    <Text style={[styles.ciudad, styles.itemC]}>HERMOSILLO</Text>
                </View>

                {/* {viaje.idaReg === 'I' && pasoSeleccionado !== 2 && (pasoSeleccionado === 2 && !ida.Conexion) &&
                    <>
                        <Text style={styles.ciudad}>Obregon</Text>
                        <Image style={styles.flecha} source={require('assets/iconos/iconos web-08.png')} />
                        <Text style={styles.ciudad}>Hermosillo</Text>
                    </>
                }
                {viaje.idaReg === 'R' && pasoSeleccionado !== 2 && (pasoSeleccionado === 2 && !ida.Conexion) &&
                    <>
                        <Text style={styles.ciudad}>{viaje.destino.PobOrg}</Text>
                        <Image style={styles.flecha} source={require('assets/iconos/iconos web-08.png')} />
                        <Text style={styles.ciudad}>{viaje.origen.PobOrg}</Text>
                    </>
                } */}

                <Text style={{textAlign: 'center'}}>
                    <Text style={styles.infoPasos}>Ida | Salida: 06/12/2024 | </Text><TouchableOpacity><Text style={styles.edit}>Editar</Text></TouchableOpacity>
                </Text>


                {/* {viaje.idaReg === 'I' && pasoSeleccionado !== 2 && viaje.optMenuMob === 'V' &&
                    <Text style={styles.infoPasos}>Salida: {viaje.diaSemanaIda}, {viaje.diaIda} {viaje.mesNombreIda}</Text>
                }
                {viaje.idaReg === 'R' && pasoSeleccionado !== 2 && viaje.optMenuMob === 'V' && !ida.Conexion &&
                    <Text style={styles.infoPasos}>Regreso: {viaje.diaSemanaReg}, {viaje.diaReg} {viaje.mesNombreReg}</Text>
                }
                {viaje.idaReg === 'R' && pasoSeleccionado !== 2 && viaje.optMenuMob === 'V' && ida.Conexion &&
                    <Text style={styles.infoPasos}>Conexión: {viaje.diaSemanaIda}, {viaje.diaIda} {viaje.mesNombreIda}</Text>
                } */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eeeef0',
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    seccionA: {
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    seccionB: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        margin: 'auto',
        marginBottom: 5
    },
    itemA: {
        alignItems: 'center',
        style: {
            flex: 1,
        }
    },
    itemB: {
        alignItems: 'center',
        style: {
            flex: 2,
        }
    },
    itemC: {
        alignItems: 'center',
        style: {
            flex: 3,
        }
    },
    line2: {
        borderBottomColor: '#93939f',
        borderBottomWidth: 1,
        width: '20%',
        marginVertical: 10,
        marginLeft: 10,
        marginRight: 10
    },
    active: {
        color: '#F05A28'
    },
    pasos: {
        fontFamily: 'Termina-Regular',
        color: '#6d6e70',
        textAlign: 'center',
        fontSize: '.9rem'
    },
    ciudad: {
        fontFamily: 'Termina-Regular',
        color: '#F05A28',
        fontSize: '.9rem'
    },
    flecha: {
        color: '#dedede'
    },
    infoPasos: {
        fontFamily: 'Termina-Regular',
        color: '#6d6e70',
        margin: 'auto',
        marginBottom: 10
    },
    edit: {
        fontFamily: 'Termina-Regular',
        textDecorationLine: 'underline',
        color: '#F05A28',
        cursor: 'pointer'
    }
});

export default ResumenSup;