import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Card } from 'react-native-elements'

export class InfoScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            argentina: this.searchPais("Argentina"),
            usa: this.searchPais("United States of America"),
            brasil: this.searchPais("Brazil"),
            mundo: this.props.route.params.mundo
        }
        /*
        console.log(this.state)
        console.log(this.props.route.params.nombre)
        console.log(this.props.route.params.apellido) 
        */
        this.searchPais = this.searchPais.bind(this)
    }

    searchPais(pais) {
        return  this.props.route.params.paises.find(elemet => elemet.Country == pais)
    }

    render() {
        return (
            <View style = {styles.container}>
                <Card>
                    <Card.Title>TODO EL MUNDO</Card.Title>
                    <Card.Divider/>
                    <Text>
                        Nuevos confirmados: { "\t\t" + this.state.mundo.NewConfirmed + "\n"} 
                        Nuevos muertos: {"\t\t\t\t\t" + this.state.mundo.NewDeaths + "\n"} 
                        Nuevos Recuperados: { "\t" + this.state.mundo.NewRecovered + "\n\n"}
                        Total de confirmados: { "\t" + this.state.mundo.TotalConfirmed + "\n"} 
                        Total de muertos: { "\t\t\t\t\t" + this.state.mundo.TotalDeaths + "\n"} 
                        Total de Recuperados: { "\t" + this.state.mundo.TotalRecovered}
                    </Text>
                </Card>
                <Card>
                    <Card.Title>ARGENTINA</Card.Title>
                    <Card.Divider/>
                    <Text>
                        Nuevos confirmados: { "\t\t" + this.state.argentina.NewConfirmed + "\n"} 
                        Nuevos muertos: {"\t\t\t\t\t" + this.state.argentina.NewDeaths + "\n"} 
                        Nuevos Recuperados: { "\t" + this.state.argentina.NewRecovered + "\n\n"}
                        Total de confirmados: { "\t" + this.state.argentina.TotalConfirmed + "\n"} 
                        Total de muertos: { "\t\t\t\t\t" + this.state.argentina.TotalDeaths + "\n"} 
                        Total de Recuperados: { "\t" + this.state.argentina.TotalRecovered}
                    </Text>
                </Card>
                <Card>
                    <Card.Title>ESTADOS UNIDOS</Card.Title>
                    <Card.Divider/>
                    <Text>
                        Nuevos confirmados: { "\t\t" + this.state.usa.NewConfirmed + "\n"} 
                        Nuevos muertos: {"\t\t\t\t\t" + this.state.usa.NewDeaths + "\n"} 
                        Nuevos Recuperados: { "\t" + this.state.usa.NewRecovered + "\n\n"}
                        Total de confirmados: { "\t" + this.state.usa.TotalConfirmed + "\n"} 
                        Total de muertos: { "\t\t\t\t\t" + this.state.usa.TotalDeaths + "\n"} 
                        Total de Recuperados: { "\t" + this.state.usa.TotalRecovered}
                    </Text>
                </Card>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});