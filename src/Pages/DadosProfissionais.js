import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Keyboard} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {Input} from '../components/Input'
import SimplesContext from '../contexts/SimplesContext';

export function DadosProfissionais({navigation}) {

    const {escolaridade, setEscolaridade, idioma, setIdioma, experiencia, setExperiencia} = useContext(SimplesContext);

    function formPage(){
        if (escolaridade && idioma && experiencia) {
            Keyboard.dismiss();
            navigation.navigate('Info');   
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar
            animated={true}
            backgroundColor="#0E4DA4"/>

            <Input  placeholder="Escolaridade" value={ escolaridade} onChangeText={ setEscolaridade}/>

            <Input  placeholder="Idioma" value={ idioma} onChangeText={ setIdioma}/>

            <Input  placeholder="Experiência" value={ experiencia} onChangeText={ setExperiencia}/>

            <TouchableOpacity style={styles.btn} onPress={ () => formPage()}>
                <Text style={styles.btn_text}>Enviar</Text> 
            </TouchableOpacity>
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
    },
    btn:{
        backgroundColor:'#0E4DA4',
        marginTop:40,
        width: '90%',
        height: 56,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center'
    }, 
    btn_text:{
        color:'white'
    }
  });

