
import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';

import * as Google from 'expo-google-app-auth'

export default class LoginScreen extends Component{

    // Acuerdense de poner su key de Google Console
    async _signInWithGoogle(){
        
        try {
            const result = await Google.logInAsync({
                // ID DE CLIENTE AUTH 
                androidClientId: "968289813981-3m6vrobth0cr7ive1u07pib7vvqnb7cb.apps.googleusercontent.com",
                scopes: ['profile', 'email'],
            });
    
            if (result.type === 'success') {
                try {
                    this.props.onLogin();
                } catch (error){
                    console.log("Something happened " + error);
                }
            } else {
                return { cancelled: true };
            }

        } catch (e) {
            return { error: true };
        }

    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.title}>INICIAR SESSION</Text>
                <View style={styles.button}>
                    <Button
                        disabled
                        onPress={() => Alert.alert('No esta habilitada')}
                        title="Iniciar sesión con Facebook"
                    />
                </View>

                <View style={styles.button}>
                    <Button
                        onPress={() => this._signInWithGoogle()}
                        title="Iniciar sesión con Google"
                    />
                </View>

                <View style={styles.button}>
                    <Button
                        disabled
                        onPress={() => Alert.alert('No esta habilitada')}
                        title="Iniciar sesión con Github"
                    />
                </View>
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
    },
    title: {
        fontSize: 35,
        marginBottom: 480,
        
    },
    button : {
        marginBottom: 15
    }
});

