import React, {useContext} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {InfoUser} from '../components/InforUser'
import SimplesContext from '../contexts/SimplesContext';

export function Info({navigation}) {


    const { nome, cpf, email, escolaridade, idioma, experiencia } = useContext(SimplesContext);

    return (
        <View style={styles.container}>
            <StatusBar
            animated={true}
            backgroundColor="#0E4DA4"/>
            <Text style={styles.title}>Seus dados</Text>
            <View  style={styles.infomacoes}>
                <InfoUser label="Nome" value={nome} />
                <InfoUser label="E-mail" value={email}/>
                <InfoUser label="CPF" value={cpf}/>
                <InfoUser label="Escolaridade" value={escolaridade}/>
                <InfoUser label="Idoma" value={idioma}/>
                <InfoUser label="Experiência" value={experiencia}/>


            </View>

            
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
    }, 
    infomacoes:{
        width: '100%',
        height: 60,
        justifyContent:'space-between',
        marginRight:10
    }
  });

