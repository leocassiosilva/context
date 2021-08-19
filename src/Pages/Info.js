import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {Input} from '../components/Input'

export function Info({navigation}) {

    return (
        <View style={styles.container}>
            <StatusBar
            animated={true}
            backgroundColor="#0E4DA4"/>
            <Text style={styles.title}>Cadastre-se</Text>

            <Input  placeholder="Nome" />

            <Input  placeholder="E-mail" />

            <Input  placeholder="CPF" />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:50,
        paddingBottom:20, 
        paddingRight:10,
        paddingLeft:20,
        justifyContent:'flex-start',
        alignItems:'center',
      },

    title:{
        fontSize: 30,
        color:"#0E4DA4", 
        marginTop:70
    }
  });

