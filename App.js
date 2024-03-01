import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const idas = [{
    "NumMsj": 0,
    "TxtMsj": "",
    "HorSal": "0050",
    "Autobs": "182  ",
    "NumCrr": 3467183,
    "Ocupcn": "00000000000000000000000000000000000000000000000000000000----",
    "PrcNrm": 333.0,
    "PrcMed": 200.0,
    "PrcINS": 167.0,
    "PrcEst": 274.0,
    "PrcMst": 274.0,
    "PrcPro": 0.0,
    "PrcDis": 267.0,
    "PrcMsc": 0.0,
    "CodSrv": "Y",
    "Plazas": 56,
    "PsoLoc": "P",
    "CrrExt": "N",
    "FchLlg": "20240329",
    "HorLlg": "0430",
    "DiaDsp": "0",
    "DspNrm": 10,
    "DspMed": 10,
    "DspINS": 2,
    "DspEst": 10,
    "DspMst": 10,
    "DspPro": 0,
    "DspDis": 4,
    "DspMsc": 2,
    "DirEsc": "ESC",
    "Escala": 2,
    "Refley": "333.0000",
    "PrcPgo": 300.0,
    "Moneda": "MXN",
    "Recrrd": "3.40",
    "Clima": "0         ",
    "VAPor": 0,
    "VADescuentos": 0,
    "VAPrcNrm": 0.0,
    "etk": false,
    "DoubleDeck": true,
    "servicio": "MEGAPLUS",
    "RolCve": "MGP",
    "PrcNrm2": 394.0,
    "PrcMed2": 296.0,
    "PrcINS2": 0.0,
    "PrcEst2": 0.0,
    "PrcMst2": 0.0,
    "PrcPro2": 0.0,
    "PrcDis2": 0.0,
    "PrcMsc2": 0.0,
    "DspNrm2": 10,
    "DspMed2": 10,
    "DspINS2": 2,
    "DspEst2": 10,
    "DspMst2": 10,
    "DspPro2": 0,
    "DspDis2": 10,
    "DspMsc2": 2,
    "subesc": null,
    "origenGPS": {
      "lat": "27.482528      ",
      "lng": "-109.946657    "
    },
    "destinoGPS": {
      "lat": "29.077438      ",
      "lng": "-110.930008    "
    },
    "Conexion": false,
    "ConexionCodCiudad": "-  ",
    "ConexionCiudad": "-",
    "ConexionTiempo": "-",
    "Conexionnumcrr": 0,
    "Conexioncodsrv": "-  ",
    "Conexionfchrll": "-            ",
    "ConexionID": 0,
    "lleno": false
  }]; // Define tus datos de ida aquí

  let viaje = {
    diaIda: '',
    mesNombreIda: '',
    fchida:'',
    optMenuMob:'V'
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
    <View>
      {idas.length === 0 && (
        <View>
          <Text style={styles.sinResultados}>Sin Resultados</Text>
        </View>
      )}
      {idas.map((ida, index) => (
        <View style={[styles.salidas2]}>

          <View style={[styles.seccionB]}>
            {/* CAMION */}
            <View style={styles.Item}>
              <Text style={{ fontWeight: '700', color: definirServicio(ida.servicio, ida.RolCve) }}>{ida.servicio}</Text>
              <View style={[styles.circle,
              (ida.servicio === 'PLATINUM' || ida.servicio === 'PLATINUM ' || ida.servicio === 'TITANIUM ' || ida.servicio === 'TITANIUM' || (ida.RolCve === 'CAZ' && ida.servicio === 'COSTA AZUL') || (ida.servicio === 'PLATINUM INTERNACIONAL' || ida.servicio === 'PLUS INTERNACIONAL' || ida.servicio === 'PLATINUM INTL. ' || ida.servicio === 'PLUS INTL. ') || ida.servicio === 'SPRINTER' || ida.servicio === 'PLUS' || ida.servicio === 'MEGAPLUS') && { backgroundColor: 'red' }]}></View>
              <Text style={[styles.infoBoleto3, { color: definirServicio(ida.servicio, ida.RolCve) }]}>{ida.DoubleDeck && 'DOBLE PISO'}</Text>
            </View>

            <View style={styles.Item}>
              <Text style={styles.infoBoleto}>{viaje.diaIda} {viaje.mesNombreIda}</Text>
              <Text style={styles.hora}>{getTimeInOrder(ida.HorSal)}</Text>
            </View>

            <View style={[styles.Item, ida.RolCve != 'CAZ' ? styles.line : styles['line-caz']]}>
              {ida.PrcMsc > 0 && <Image source={{ uri: 'https://store.tufesa.com.mx/v3/assets/iconos/petIcon.png' }} style={styles.iconoPett} />}
              {ida.Conexion && <View style={styles.conexion}>1</View>}
            </View>

            <View style={styles.Item}>
              <Text style={styles.infoBoleto}>{ida.diaLlegada} {ida.mesNombreLlegada}</Text>
              <Text style={styles.hora}>{getTimeInOrder(ida.HorLlg)}</Text>
            </View>

            <View style={styles.Item}>
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
            </View>

            <View style={styles.Item}>
              {viaje.optMenuMob === 'V' && (
                <>
                  {precioCoincide(ida.TotalSinDescuento, ida.TotalConDescuento) === false && (
                    <Text style={styles.precioReg}>{formatearDinero(ida.TotalSinDescuento)} {ida.Moneda}</Text>
                  )}
                  <Text style={ida.RolCve != 'CAZ' ? styles.precio : styles['precio-caz']}>{formatearDinero(ida.TotalConDescuento)} {ida.Moneda}</Text>
                </>
              )}
            </View>

            <View style={styles.Item}>
              <TouchableOpacity style={[styles.btnCircle, !getSo() && styles.btnIos, ida.RolCve != 'CAZ' ? null : styles['btnCircle-caz']]} onPress={() => validaSiguiente(ida)}>
                <Image source={{ uri: 'https://store.tufesa.com.mx/v3/assets/iconos/flecha-derecha.png' }} style={{ width: '100%', height: '100%' }} />
              </TouchableOpacity>
            </View>
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
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  sinResultados: {
    textAlign: 'center',
    padding: 15,
    fontSize: 24
  },
  salidas2: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(128, 128, 130, 0.3)',
    padding: 10,
    position: 'relative',
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
    fontFamily: 'nehue-unica',
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 0,
  },
  infoBoleto: {
    fontSize: 12,
    margin: 0,
  },
  infoBoleto3: {
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 5,
    textAlign: 'center',
  },
  precio: {
    fontSize: 18,
    fontFamily: 'nehue-unica',
    fontWeight: 'bold',
    color: '#f05a28',
    margin: 0,
  },
  precioCaz: {
    fontSize: 18,
    fontFamily: 'nehue-unica',
    fontWeight: 'bold',
    color: '#003c71',
    margin: 0,
  },
  btnCircle: {
    cursor: 'pointer',
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#f05a28',
    color: 'white',
    borderWidth: 0,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnCircleCaz: {
    cursor: 'pointer',
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#003c71',
    color: 'white',
    borderWidth: 0,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});