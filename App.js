import React, {Component} from 'react';

// Componentes para el Drawer
import { NavigationContainer } from '@react-navigation/native';
import { DrawerCustomNavigator } from './Navigators/DrawerCustomNavigator.js';

// Mis componentes
import LoginScreen from "./Screens/LoginScreen";

export default class App extends Component{

    constructor(props){
        super(props);
        this.state = {isLoggedIn:false} // Cambiar a false para el login
    }

    setLogin(){
        this.setState({isLoggedIn:true});
    }
    setLogout(){
        //console.log('Logout del App.js')
        this.setState({isLoggedIn:false});
    }

    render(){

        if(this.state.isLoggedIn){
            return (
                <NavigationContainer>
                    <DrawerCustomNavigator onLogout={() => this.setLogout()} />
                </NavigationContainer>
            );
        } else {
            return (<LoginScreen onLogin={() => this.setLogin()}/>);
            
        }

    }

}