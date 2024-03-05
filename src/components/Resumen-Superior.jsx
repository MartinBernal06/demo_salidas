import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Asegúrate de importar los íconos de manera adecuada

function ResumenSup({ pasoSeleccionado }) {
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
            <View>{renderPasos()}</View>
            <View>
                <View style={styles.seccionB}>
                    <Text style={[styles.ciudad, styles.itemA]}>CD. OBREGON</Text>
                    <MaterialCommunityIcons style={[styles.icon, styles.itemB]} name="arrow-right" color={'#6d6e70'} size={50} />
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

                <Text style={styles.infoPasos}>Ida | Salida: 06/12/2024 | Editar</Text>

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
        backgroundColor: '#DEDEDE'
    },
    seccionA: {
        flex: 1,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    seccionB: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        margin:'auto',
        marginTop: -10
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
        borderBottomColor: 'black',
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
        color: '#6d6e70',
        textAlign: 'center',
        fontSize: 15
    },
    ciudad: {
        color: '#F05A28',
        fontSize: 15
    },
    flecha: {
        color: '#dedede'
    },
    infoPasos: {
        color: '#6d6e70',
        margin: 'auto',
        marginBottom: 10
    }
});

export default ResumenSup;