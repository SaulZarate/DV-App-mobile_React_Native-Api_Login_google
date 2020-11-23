import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';
import { Button  } from 'react-native-elements'

// Imagen
// import imagenMundo from './../image/mundo.jpg' 

// Funcion API
const getDatosApi = require("../library/apiCovid");

export class HomeScreen extends Component {

    constructor(props){
        super(props)
        this.state = {
            datosApiFlag: false,
            paises: "",
            mundo: ""
        }

        this.handlerBuscador = this.handlerBuscador.bind(this)
        this.handlerRedireccionar = this.handlerRedireccionar.bind(this)
    }

    handlerBuscador(){
        getDatosApi().then(response=>response.data).then(datos=>{
            alert('Estamos buscando los datos')
            this.setState({
                datosApiFlag: true,
                paises: datos.Countries,
                mundo: datos.Global
            })
        }).catch( error => alert('No pudimos encontrar la api, vuelva a intentarlo') )

    }

    handlerRedireccionar(){
        this.props.navigation.navigate('Info', {
            paises: this.state.paises,
            mundo: this.state.mundo
        })
    }

    render() {

        let button = (<Button
            title="Ver datos"
            onPress={this.handlerRedireccionar}
        />  )
        if( !this.state.datosApiFlag ){
            button = (<Button
                title="Buscar datos"
                type="outline"
                onPress={this.handlerBuscador}
            />)
        }

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Bienvenido</Text>
                <Text style={styles.text}>Esta Api consiste en mostrar datos de cada pais respecto al Covid19 </Text>
                
                <StatusBar style="auto" />
                <View style = {styles.contButton}>
                    { button }
                </View>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center"        
        /* flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between', */
    },
    title: {
        fontSize: 45,
        marginTop: 80,
        textAlign: "center",

    },
    text: {
        fontSize: 18,
        marginHorizontal: 20,
        textAlign: 'center',
        marginBottom: 550
    },
    contButton: {
        marginHorizontal: 20,
    }
});