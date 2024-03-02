import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

function ResumenSup({ pasoSeleccionado }) {

    let viaje = {};
    let ida = {};
    const renderPasos = () => {
        switch (pasoSeleccionado) {
            case 1:
                return (
                    <View style={styles.seccionA}>
                        <View style={styles.itemA}>
                            <Text style={styles.active}> <Text style={[styles.pasos, styles.active]}>1{'\n'}</Text>Horarios</Text>
                        </View>
                        <View style={styles.line2}></View>
                        <View style={styles.itemA}>
                            <Text> <Text style={styles.pasos}>2{'\n'}</Text>Asientos</Text>
                        </View>
                        <View style={styles.line2}></View>
                        <View style={styles.itemA}>
                            <Text> <Text style={styles.pasos}>3{'\n'}</Text>Pago</Text>
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
        <View style={`salidas ${isApp ? 'masPaddingTop' : ''}`}>
            <View>{renderPasos()}</View>
            <View>
                {viaje.idaReg === 'I' && pasoSeleccionado !== 2 && (pasoSeleccionado === 2 && !ida.Conexion) &&
                    <>
                        <Text style={styles.ciudad}>{viaje.origen.PobOrg}</Text>
                        <Image style={styles.flecha} source={require('assets/iconos/iconos web-08.png')} />
                        <Text style={styles.ciudad}>{viaje.destino.PobOrg}</Text>
                    </>
                }
                {viaje.idaReg === 'R' && pasoSeleccionado !== 2 && (pasoSeleccionado === 2 && !ida.Conexion) &&
                    <>
                        <Text style={styles.ciudad}>{viaje.destino.PobOrg}</Text>
                        <Image style={styles.flecha} source={require('assets/iconos/iconos web-08.png')} />
                        <Text style={styles.ciudad}>{viaje.origen.PobOrg}</Text>
                    </>
                }
                {viaje.idaReg === 'I' && pasoSeleccionado !== 2 && viaje.optMenuMob === 'V' &&
                    <Text style={styles.infoPasos}>Salida: {viaje.diaSemanaIda}, {viaje.diaIda} {viaje.mesNombreIda}</Text>
                }
                {viaje.idaReg === 'R' && pasoSeleccionado !== 2 && viaje.optMenuMob === 'V' && !ida.Conexion &&
                    <Text style={styles.infoPasos}>Regreso: {viaje.diaSemanaReg}, {viaje.diaReg} {viaje.mesNombreReg}</Text>
                }
                {viaje.idaReg === 'R' && pasoSeleccionado !== 2 && viaje.optMenuMob === 'V' && ida.Conexion &&
                    <Text style={styles.infoPasos}>Conexión: {viaje.diaSemanaIda}, {viaje.diaIda} {viaje.mesNombreIda}</Text>
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    seccionA: {
        // Estilos de la sección
    },
    itemA: {
        // Estilos de los elementos de la sección
    },
    line2: {
        // Estilos de la línea 2
    },
    active: {
        // Estilos para el estado activo
    },
    pasos: {
        // Estilos para los pasos
    },
    ciudad: {
        // Estilos para la ciudad
    },
    flecha: {
        // Estilos para la flecha
    },
    infoPasos: {
        // Estilos para la información de los pasos
    }
});

export default ResumenSup;