import React, {Component} from 'react';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import {View, StyleSheet, Text} from "react-native";
import { Icon } from 'react-native-elements'

export class DrawerContentScreen extends Component {

    constructor(props){
        super(props)

        this.handlerLogout = this.handlerLogout.bind(this)
        //console.log(this.props)
    }

    handlerLogout(){
        //console.log('boton logout')
        //console.log(this.props)
        this.props.onLogout()
    }

    render(){

        return(
            <View style={styles.container}>
                <DrawerContentScrollView {...this.props}>
                    <View style={styles.topDrawer}>
                        <DrawerItem 
                            icon={() => <Icon type="material-community" name="home-outline" style={styles.icon}/>}
                            label="Home"
                            onPress={() => this.props.navigation.navigate("Home")}
                        />
                        <DrawerItem 
                            icon={() => <Icon type="material-community" name="calendar" style={styles.icon}/>}
                            label="Info"
                            onPress={() => this.props.navigation.navigate("Info")}
                        />
                    </View>
                </DrawerContentScrollView>
                <View style={styles.bottomDrawer}>
                    <DrawerItem 
                        icon={() => <Icon type="material-community" name="logout" style={styles.icon}/>}
                        label="Cerrar session"
                        onPress={() => this.handlerLogout()}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    icon:{
        color:'#517fa4'
    },
    topDrawer:{
        flex:1   
    },
    bottomDrawer: {
        flex:-1,
        justifyContent: 'flex-end',
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    }
});