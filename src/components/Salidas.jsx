import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity, useWindowDimensions } from 'react-native';
import SalidaService from '../services/SalidasService'
import { useFonts } from 'expo-font';
import ResumenSup from './Resumen-Superior'

const Salidas = () => {
    const [fontsLoaded] = useFonts({
        'Termina-Regular': require('../assets/fonts/Termina-Regular.otf'),
        'Termina-Heavy': require('../assets/fonts/Termina-Heavy.otf'),
        'Termina-Bold': require('../assets/fonts/Termina-Bold.otf'),
        'Neue-Unica': require('../assets/fonts/NeueHaasUnicaW1G-Regular.otf')
    });

    const { height, width, scale, fontScale } = useWindowDimensions();

    const [idas, setIdas] = useState([]);

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const data = await SalidaService.obtenerSalidas();
                setIdas(data);
            } catch (error) {
                // Manejar el error
            }
        };

        obtenerDatos();
    }, []);

    let viaje = {
        diaIda: '',
        mesNombreIda: '',
        fchida: '',
        optMenuMob: 'V'
    }

    const definirServicio = (servicio, RolCve) => {
        if (servicio === 'MEGAPLUS') {
            return '#BA8848'
        } else if (servicio === 'TITANIUM') {
            return '#2C2B2D'
        } else if (servicio === 'PLUS INTERNACIONAL' || servicio === 'PLUS INTL. ') {
            return '#2D2E82'
        } else if (servicio === 'PLUS') {
            return '#BA8848'
        } else if (servicio === 'PLATINUM INTERNACIONAL' || servicio === 'PLATINUM INTL. ') {
            return '#2D2E82'
        } else if (servicio === 'TITANIUM DOBLE PISO' && rolCve === 'PRM') {
            return '#2C2B2D'
        }
    };

    const getTimeInOrder = (hora) => {
        // Lógica para obtener la hora en orden
        try {
            const split = hora.split(':');
            let horas = parseInt(split[0], 10);
            const mins = split[1];
            let isAmOrPm = ' AM';

            if (horas > 12) {
                horas = horas - 12;
                isAmOrPm = ' PM';
            }

            if (horas === 12) {
                isAmOrPm = ' PM';
            }

            if (horas === 0) {
                horas = 12;
            }

            return horas + ':' + mins + isAmOrPm;
        } catch (error) {
            return hora;
        }
    };

    const calcularDiferenciaHoras2 = (fchida, HorSal, FchLlg, HorLlg) => {
        // Lógica para calcular la diferencia de horas
    };

    const convertirAHorasMinutos = (ida) => {
        // Lógica para convertir a horas y minutos
    };

    const formatearDinero = (cantidad) => {
        // Lógica para formatear la cantidad de dinero
    };

    const precioCoincide = (totalSinDescuento, totalConDescuento) => {
        // Lógica para verificar si el precio coincide
    };

    const getSo = () => {
        // Lógica para obtener el sistema operativo
    };

    const validaSiguiente = (ida) => {
        // Lógica para validar siguiente
    };

    const openModal = (template2, ida) => {
        // Lógica para abrir modal
    };

    return (
        <ScrollView style={styles.container}>
            <ResumenSup pasoSeleccionado={1} />
            {idas.length === 0 && (
                <View>
                    <Text style={styles.sinResultados}>Sin Resultados</Text>
                </View>
            )}

            <View style={[styles.wrapper, width >= 768 ? { width: '70%' } : { width: '100%' }]}>
                {idas.map((ida, index) => (
                    <View style={[styles.salidas2]} key={ida.NumCrr}>

                        <View style={[width >= 768 ? styles.seccionBLandscape : styles.seccionB, { fontFamily: 'Termina-Regular' }]}>
                            {/* CAMION */}
                            <View style={[styles.Item, { display: 'flex', margin: 'auto', gridRow: '1/3' }]}>
                                <Text style={{ fontWeight: '700', color: definirServicio(ida.servicio, ida.RolCve), fontFamily: 'Termina-Regular' }}>{ida.servicio}</Text>
                                <View style={[styles.circle]}>
                                    <Image source={ida.servicio === 'PLATINUM' || ida.servicio === 'PLATINUM ' ? require("../assets/iconos/IconosServicios/PLATINUM.png") :
                                        ida.servicio === 'TITANIUM ' || ida.servicio === 'TITANIUM' ? require("../assets/iconos/IconosServicios/TITANIUM.png") :
                                            ida.RolCve === 'CAZ' && ida.servicio === 'COSTA AZUL' ? require("../assets/images/bus_costa_azul.png") :
                                                ida.servicio === 'PLATINUM INTERNACIONAL' || ida.servicio === 'PLUS INTERNACIONAL' || ida.servicio === 'PLATINUM INTL. ' || ida.servicio === 'PLUS INTL. ' ? require("../assets/iconos/IconosServicios/INTERNACIONAL.png") :
                                                    ida.servicio === 'SPRINTER' ? require("../assets/images/bus_costa_azul.png") :
                                                        ida.servicio === 'PLUS' || ida.servicio === 'MEGAPLUS' ? require("../assets/iconos/IconosServicios/PLUS.png") : ''
                                    } style={[styles.circle]}>
                                    </Image>
                                </View>
                                <Text style={[styles.infoBoleto3, { color: definirServicio(ida.servicio, ida.RolCve), fontFamily: 'Termina-Regular' }]}>{ida.DoubleDeck && 'DOBLE PISO'}</Text>
                            </View>

                            <View style={[styles.Item, { display: 'flex', margin: 'auto' }]}>
                                <Text style={styles.infoBoleto}>28 Mar</Text>
                                <Text style={[width >= 1024 ? { fontSize: '1.7rem' } : width <= 425 ? { fontSize: '1.1rem' } : { fontSize: '1.5rem' }, styles.hora]}>12:50 AM</Text>
                                {/* <Text style={{  fontFamily: 'Termina-Regular' }}>3 hrs. 40 mins.</Text> */}
                            </View>

                            <View style={[styles.Item, width >= 768 ? { gridColumn: '3 / 5' } : {}, { display: 'flex', margin: 'auto', width: 100 }]}>
                                <View style={[styles.line]}>
                                    <View style={[styles.dot1]}></View>
                                    <View style={[styles.dot2]}></View>
                                </View>
                                {/* <Text style={[{ fontFamily: 'Termina-Regular' }]}>Escalas 2</Text> */}
                            </View>

                            <View style={[styles.Item, { display: 'flex', margin: 'auto' }]}>
                                <Text style={styles.infoBoleto}>28 Mar</Text> 
                                <Text style={[width >= 1024 ? { fontSize: '1.7rem' } : width <= 425 ? { fontSize: '1.1rem' } : { fontSize: '1.5rem' }, styles.hora]}>4:30 AM</Text>
                                {/* <Text style={{  fontFamily: 'Termina-Regular' }}>De Paso</Text> */}
                            </View>

                            <View style={[styles.Item, { display: 'flex', margin: 'auto' }]}>
                                <Text style={styles.infoBoleto}><Image source={{ uri: 'https://store.tufesa.com.mx/v3/assets/iconos/reloj.png' }} style={styles.ico}></Image>3 hrs. 40 mins.</Text>
                            </View>

                            <View style={[styles.Item, { display: 'flex', margin: 'auto' }]}>
                                <Text style={styles.infoBoleto}>Escalas 2</Text>
                            </View>

                            <View style={[styles.Item, { display: 'flex', margin: 'auto' }]}>
                                <Text style={styles.infoBoleto}><Image source={{ uri: 'https://store.tufesa.com.mx/v3/assets/iconos/autobusgris0.png' }} style={styles.ico}></Image>De Paso</Text>
                            </View>

                            <View style={[styles.Item, { display: 'flex', margin: 'auto' }]}>
                                <TouchableOpacity style={[styles.detalles, ida.RolCve != 'CAZ' ? null : styles['detalles-caz']]} onPress={() => openModal(template2, ida)}>
                                    <Text style={styles.detalles}>Detalles</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={[styles.Item, width >= 768 ? { gridRow: 1, gridColumn: 6 } : { gridColumn: '2 / 4' }, { display: 'flex', margin: 'auto' }]}>
                                <Text style={[styles.infoBoleto3, { color: '#F05A28', fontFamily: 'Neue-Unica', fontSize: 20 }]}>$300 MXN</Text>
                            </View>

                            <View style={[styles.Item, { display: 'flex', margin: 'auto' }]}>
                                <View style={styles.Item}>
                                    <TouchableOpacity style={[styles.btnCircle]} onPress={() => validaSiguiente(ida)}>
                                        <Image source={{ uri: 'https://store.tufesa.com.mx/v3/assets/iconos/flecha-derecha.png' }} style={{ width: 24, height: 24 }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            {/* <View style={styles.Item}>
                                <Text style={styles.infoBoleto}><Image source={{ uri: 'https://store.tufesa.com.mx/v3/assets/iconos/reloj.png' }} style={styles.ico} />{calcularDiferenciaHoras2(viaje.fchida, ida.HorSal, ida.FchLlg, ida.HorLlg)}</Text>
                            </View>

                            <View style={styles.Item}>
                                <Text style={[ida.RolCve != 'CAZ' ? styles.infoBoleto : styles['infoBoleto2']]}>Escalas: {ida.DirEsc}</Text>
                            </View>

                            <View style={styles.Item}>
                                <Text style={styles.infoBoleto}><Image source={{ uri: 'https://store.tufesa.com.mx/v3/assets/iconos/autobusgris0.png' }} style={styles.ico} />{ida.PsoLoc}</Text>
                            </View>

                            <View style={styles.Item}>
                                <TouchableOpacity style={[styles.detalles, ida.RolCve != 'CAZ' ? null : styles['detalles-caz']]} onPress={() => openModal(template2, ida)}>
                                    <Text>Detalles</Text>
                                </TouchableOpacity>
                            </View> */}

                        </View>

                        {ida.Conexion && <Text style={styles['conexion-text']}>Conexión en {ida.ConexionCiudad} con espera de {convertirAHorasMinutos(ida)}</Text>}

                        {ida.TxtMsj != 'Operacion Exitosa' && ida.TxtMsj && (
                            <View style={styles['text-center']}>
                                <Text style={styles.titlePasos}>{ida.TxtMsj}</Text>
                            </View>
                        )}
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        margin: 'auto',
        fontFamily: 'Termina-Regular',
        backgroundColor: 'white'
    },
    wrapper: {
        margin: 'auto'
    },
    sinResultados: {
        textAlign: 'center',
        padding: 15,
        fontSize: 24,
        fontFamily: 'Termina-Regular'
    },
    salidas2: {
        borderTopWidth: 1,
        borderTopColor: 'rgba(128, 128, 130, 0.3)',
        padding: 10,
        position: 'relative',
        fontFamily: 'Termina-Regular'
    },
    titlePasos: {
        color: '#f05a28',
        fontSize: 12,
    },
    titlePasosCaz: {
        color: '#003c71',
        fontSize: 12,
    },
    titlePasosPlatinum: {
        color: '#422924',
        fontSize: 12,
    },
    titlePasosPlus: {
        color: '#ba8848',
        fontSize: 12,
    },
    titlePasosTitanium: {
        color: '#2c2b2d',
        fontSize: 12,
    },
    titlePasosInternacional: {
        color: '#422924',
        fontSize: 12,
    },
    hora: {
        fontFamily: 'Neue-Unica',
        fontWeight: 'bold',
        fontSize: '1.5rem',
        marginBottom: 0,
    },
    infoBoleto: {
        fontSize: '.75rem',
        margin: 0,
        fontFamily: 'Termina-Regular',
        textAlign: 'center'
    },
    infoBoleto3: {
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 5,
        textAlign: 'center',
    },
    precio: {
        fontSize: 18,
        fontFamily: 'Neue-Unica',
        fontWeight: 'bold',
        color: '#f05a28',
        margin: 0,
    },
    precioCaz: {
        fontSize: 18,
        fontFamily: 'Neue-Unica',
        fontWeight: 'bold',
        color: '#003c71',
        margin: 0,
    },
    btnCircle: {
        cursor: 'pointer',
        height: 50,
        width: 50,
        borderRadius: 50,
        backgroundColor: '#f05a28',
        color: 'white',
        borderWidth: 0,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    seccionB: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: '1fr 0.55fr .8fr',
        fontFamily: 'Termina-Regular'
    },
    seccionBLandscape: {
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gridTemplateRows: '1fr 0.75fr',
        gridGap: 5,
        fontFamily: 'Termina-Regular'
    },
    Item: {
        textAlign: 'center',
        alignSelf: 'center',
    },
    circle: {
        height: '50px',
        width: '50px',
        display: 'block',
        borderRadius: '50%',
        marginBottom: '10px',
        backgroundSize: 'cover',
        margin: 'auto',
    },
    line: {
        borderTopWidth: 2,
        borderTopColor: '#f05a28',
        paddingTop: 5,
        paddingBottom: 5,
        marginTop: 25,
        width: '100%',
        position: 'relative'
    },
    ico: {
        width: 10,
        height: 10,
        marginHorizontal: 3
    },
    detalles: {
        fontFamily: 'Termina-Regular',
        cursor: 'pointer',
        fontSize: '0.75rem',
        color: '#f05a28',
        textDecorationLine: 'underline',
        margin: 0,
    },
    dot1: {
        left: 0,
        content: '',
        width: 6,
        height: 6,
        backgroundColor: '#f05a28',
        borderRadius: '50%',
        position: 'absolute',
        top: -4,
    },
    dot2: {
        right: 0,
        content: '',
        width: 6,
        height: 6,
        backgroundColor: '#f05a28',
        borderRadius: '50%',
        position: 'absolute',
        top: -4,
    },
    hora:{
        textAlign: 'center',
        lineHeight: '1.3',
        display: 'block',
        fontFamily: 'Neue-Unica',
        fontWeight: 'bold',
        marginBottom: 0
    }
});

export default Salidas